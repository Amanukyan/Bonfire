import clsx from "clsx"
import React, { ReactElement } from "react"
import toast from "react-hot-toast"
import Button from "../../../components/Button"
import { Bonfire } from "../../../data/types/BonfireAbi"
import useBonfireContract from "../../../hooks/useBonfireContract"
import useEnergyLeftQuery from "../../../hooks/useBonfireContract/useEnergyLeftQuery"
import useWallet from "../../../hooks/useWallet"

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
    /* TODO: 5. implement quest card */
    return null
}
