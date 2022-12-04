import useBonfireContract from "./useBonfireContract"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { BonfireAbi } from "../../data/types"
import { Bonfire } from "../../data/types/BonfireAbi"

async function fetchQuests(bonfireContract: BonfireAbi) : Promise<Bonfire.QuestStructOutput[]> {
    const quests = await bonfireContract.getAllQuests()
    return quests
}

export default function useQuestsQuery() : UseQueryResult<Bonfire.QuestStructOutput[], unknown> {
    const bonfire = useBonfireContract()

    return useQuery({
         queryKey: ['quests'], 
         queryFn: () => fetchQuests(bonfire!) 
    })
}
