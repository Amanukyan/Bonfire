import { useMemo } from "react"
import useWallet from "../useWallet"
import ChainId from "../useWallet/ChainId"
import { getAlchemyProvider } from "../useWallet/getProviderAndSigner"

export default function useProvider(chainId: ChainId) {
    const { chainId: walletChainId, provider } = useWallet()
    return useMemo(() => {
        if (chainId === walletChainId) {
            return provider
        } else {
            // if wallet is not connected or not on the right chain, use our fallback provider
            return getAlchemyProvider(chainId)
        }
    }, [chainId, walletChainId, provider])
}
