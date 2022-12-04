import useBonfireContract from "./useBonfireContract"
import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { ContractTransaction, ethers } from "ethers"
import useWallet from "../useWallet"
import { BonfireAbi } from "../../data/types"

async function restAtBonfire(bonfireContrat: BonfireAbi, signer: ethers.providers.Provider) {
    const cost = await bonfireContrat.REST_COST_IN_ETH()
    const tx = await bonfireContrat.connect(signer).rest({ value: cost })
    return tx
}

export default function useRestMutation() : UseMutationResult<ContractTransaction, unknown, void, unknown> {
    const { signer } = useWallet()
    const bonfire = useBonfireContract()
    
    return useMutation(() => restAtBonfire(bonfire!, signer))
}