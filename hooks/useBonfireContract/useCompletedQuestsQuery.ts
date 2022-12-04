import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { BonfireAbi } from "../../data/types"
import useBonfireContract from "./useBonfireContract"
import useWallet from "../useWallet"

async function fetchCompletedQuests(questIds: number[], bonfireContrat: BonfireAbi, account: string) {
    const promises = questIds.map(questId => bonfireContrat.hasCompletedQuest(account, questId))
    const completedQuests = await Promise.all(promises)
    return completedQuests
}

export default function useCompletedQuestsQuery(questIds: number[]) : UseQueryResult<boolean[], unknown> {
    const { account } = useWallet()
    const bonfire = useBonfireContract()

    return useQuery({ 
        queryKey: ['completedQuests', { questIds, account }], 
        queryFn: () => fetchCompletedQuests(questIds, bonfire!, account!), 
        enabled: questIds.length > 0 
    })
}
