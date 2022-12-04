import useContract from "../useContract/useContract"

import BonfireAbi from "../../data/abi/BonfireAbi.json"
import ChainId from "../useWallet/ChainId"
import { BonfireAbi as Bonfire } from "../../data/types"

const bonfireContractAddress: Record<number, string> = {
    [ChainId.GOERLI]: "0x903fc49c2ae898a2db4359e0e3998666c073485a",
}
const bonfireChainId = ChainId.GOERLI

export default function useBonfireContract() {
    return useContract<Bonfire>(
        bonfireContractAddress[bonfireChainId],
        BonfireAbi,
        bonfireChainId
    )
}
