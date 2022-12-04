import useBonfireContract from "./useBonfireContract"
import { useMutation } from "@tanstack/react-query"
import { ethers } from "ethers"
import useWallet from "../useWallet"
import { BonfireAbi } from "../../data/types"

async function completeQuest(questId: number, bonfireContrat: BonfireAbi, signer: ethers.providers.Provider) {
    const tx = await bonfireContrat.connect(signer).completeQuest(questId)
    return tx 
}

export default function useCompleteQuestMutation(questId: number) {
    const { signer } = useWallet()
    const bonfire = useBonfireContract()
        
    return useMutation(() => completeQuest(questId, bonfire!, signer))
}