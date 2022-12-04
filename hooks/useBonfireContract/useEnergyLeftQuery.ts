import useBonfireContract from "./useBonfireContract"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import useWallet from "../useWallet"
import { BonfireAbi } from "../../data/types"
import { BigNumber } from "ethers"

async function fetchEnergyLeft(bonfireContract: BonfireAbi, account: string) : Promise<BigNumber> {
    const energyLeft = await bonfireContract.energyLeft(account)
    return energyLeft
}

export default function useEnergyLeftQuery() : UseQueryResult<BigNumber, unknown> {
    const { account } = useWallet()
    const bonfire = useBonfireContract()

    return useQuery({ 
        queryKey: ['energyLeft', { account }], 
        queryFn: () => fetchEnergyLeft(bonfire!, account!) 
    })
}
