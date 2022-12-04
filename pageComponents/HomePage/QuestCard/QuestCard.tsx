import { useQueryClient } from "@tanstack/react-query"
import React, { ReactElement } from "react"
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
    const { mutate: completeQuest } = useCompleteQuestMutation(questId)

    const toastMessages = {
        loading: "Completing quest",
        success: <b>Quest Completed!</b>,
        error: <b>Could not complete quest.</b>,
    }

    function handleStartQuest() {
        completeQuest(undefined, {
            onSuccess: async (tx) => {
                await toast.promise(tx.wait(), toastMessages)
            },
            onError: () => toast.error("This didn't work."),
        })
    }

    return (
        <Button style="primary" onClick={handleStartQuest}>
            quest: {quest.name} questId: {questId} completed:{" "}
            {completed ? "yes" : "no"}
        </Button>
    )
}
