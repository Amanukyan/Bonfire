import useWallet from "../useWallet"
import { ethers } from "ethers"
import { useMemo } from "react"
import ChainId from "../useWallet/ChainId"
import useProvider from "../useProvider"

export default function useContract<C extends ethers.Contract>(
    address: string | undefined,
    abi: ethers.ContractInterface,
    chainId?: ChainId
): C | undefined {
    const { chainId: walletChainId } = useWallet()
    const provider = useProvider(chainId || walletChainId)
    return useMemo(
        () => getContract(address, abi, provider),
        [address, abi, provider]
    )
}

export function getContract<C extends ethers.Contract>(
    address: string | undefined,
    abi: ethers.ContractInterface,
    signerOrProvider: ethers.Signer | ethers.providers.Provider
): C | undefined {
    if (!signerOrProvider || !address) {
        return
    }
    return new ethers.Contract(address, abi, signerOrProvider) as C
}
