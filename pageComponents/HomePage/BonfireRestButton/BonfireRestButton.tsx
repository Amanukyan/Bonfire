import { useQueryClient } from "@tanstack/react-query"
import React, { ReactElement } from "react"
import toast from "react-hot-toast"
import Button from "../../../components/Button"
import useEnergyLeftQuery from "../../../hooks/useBonfireContract/useEnergyLeftQuery"
import useRestMutation from "../../../hooks/useBonfireContract/useRestMutation"

export default function BonfireRestButton(): ReactElement {
    const { data: energyLeft } = useEnergyLeftQuery()
    const { mutate: restAtTheBonfire } = useRestMutation()

    const toastMessages = {
        loading: "Resting at the bonfire...",
        success: <b>Rested!</b>,
        error: <b>Could not rest.</b>,
    }

    function handleRest() {
        restAtTheBonfire(undefined, {
            onSuccess: async (tx) => {
                await toast.promise(tx.wait(), toastMessages)
            },
            onError: () => toast.error("This didn't work."),
        })
    }

    return (
        <Button
            style="primary"
            disabled={energyLeft && energyLeft.toNumber() >= 100}
            onClick={handleRest}
        >
            Rest at the bonfire
        </Button>
    )
}
