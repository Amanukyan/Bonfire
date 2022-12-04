import useBonfireContract from "./useBonfireContract"
import { useQuery } from "@tanstack/react-query"
import useWallet from "../useWallet"

export default function useEnergyLeftQuery() {
    const wallet = useWallet()
    const bonfire = useBonfireContract()
    /* TODO: 3. implement queries */
    return null
}
