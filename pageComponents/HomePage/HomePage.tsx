import React, { ReactElement } from "react"
import Page from "../../components/Page"
import useCompletedQuestsQuery from "../../hooks/useBonfireContract/useCompletedQuestsQuery"
import useQuestsQuery from "../../hooks/useBonfireContract/useQuestsQuery"
import AllCompletedPage from "../AllCompletedPage"
import BonfireRestButton from "./BonfireRestButton"
import EnergyLeftDisplay from "./EnergyLeftDisplay"
import QuestCard from "./QuestCard"

export default function HomePage(): ReactElement {
    const { data: quests } = useQuestsQuery()
    const questIds: number[] = Object.keys(quests || []).map((x) => Number(x))
    const { data: questsCompleted } = useCompletedQuestsQuery(questIds)
    return !questsCompleted || questsCompleted.filter((b) => !b).length > 0 ? (
        <Page>
            <div className="flex flex-col gap-8">
                <span className="w-full max-w-prose text-gray-500 text-sm">
                    Hello traveler, and welcome to the Bonfire - where thrilling
                    quests will await you on your journey. Be careful not to
                    overwork yourself and rest up before taking on new
                    adventures ⚔️
                </span>
                <EnergyLeftDisplay />
                <div className="flex flex-col w-full gap-2">
                    {questsCompleted &&
                        quests?.map((quest, i) => (
                            <QuestCard
                                key={i}
                                questId={i}
                                quest={quest}
                                completed={questsCompleted[i]}
                            />
                        ))}
                </div>
                <div className="flex flex-col gap-2">
                    <span className="w-full max-w-prose text-gray-500 text-sm">
                        Tired?
                    </span>
                    <BonfireRestButton />
                </div>
            </div>
        </Page>
    ) : (
        <AllCompletedPage />
    )
}
