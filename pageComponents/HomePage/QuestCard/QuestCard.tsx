import { useQueryClient } from "@tanstack/react-query"
import clsx from "clsx"
import React, { ReactElement, useState } from "react"
import toast from "react-hot-toast"
import Button from "../../../components/Button"
import { Bonfire } from "../../../data/types/BonfireAbi"
import useCompleteQuestMutation from "../../../hooks/useBonfireContract/useCompleteQuestMutation"
import useEnergyLeftQuery from "../../../hooks/useBonfireContract/useEnergyLeftQuery"

type Props = {
    questId: number
    quest: Bonfire.QuestStructOutput
    completed: boolean
}

export default function QuestCard({
    questId,
    quest,
    completed,
}: Props): ReactElement {
    const { data: energyLeft } = useEnergyLeftQuery()
    const { mutate: completeQuest } = useCompleteQuestMutation(questId)
    const queryClient = useQueryClient()
    const [isCompleting, setIsCompleting] = useState(false)
    const enoughEnergy = energyLeft && energyLeft.gt(quest.energyCost)

    const toastMessages = {
        loading: "Completing quest",
        success: <b>Quest Completed!</b>,
        error: <b>Could not complete quest.</b>,
    }

    function handleStartQuest() {
        completeQuest(undefined, {
            onSuccess: async (tx) => {
                setIsCompleting(true)
                await toast.promise(tx.wait(), toastMessages)
                setIsCompleting(false)
                queryClient.invalidateQueries({ queryKey: ["completedQuests"] })
                queryClient.invalidateQueries({ queryKey: ["energyLeft"] })
            },
            onError: () => toast.error("This didn't work."),
        })
    }

    return (
        <div
            className={clsx(
                "p-4 border border-black/25 rounded-xl shadow",
                !completed && enoughEnergy && "bg-completable-card",
                !completed && !enoughEnergy && "bg-non-completable-card",
                completed && "bg-completed-card",
                isCompleting && questId == 1 && "animate-pulse-card"
            )}
        >
            <div className="flex justify-between">
                <span>{quest.name}</span>
                <div>
                    <strong className="mr-1">
                        {quest.energyCost.toNumber()}
                    </strong>
                    <span>Energy</span>
                </div>
            </div>
            {!completed && enoughEnergy && (
                <Button
                    className="mt-2"
                    style="secondary"
                    onClick={handleStartQuest}
                >
                    Start
                </Button>
            )}
        </div>
    )
}
