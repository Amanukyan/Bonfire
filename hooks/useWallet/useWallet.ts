/* eslint-disable */
import { useWeb3React } from "@web3-react/core"
import { useMemo } from "react"
import getProviderAndSigner from "./getProviderAndSigner"

export default function useWallet() {
    const { account, library, chainId } = useWeb3React()
    const [provider, signer] = useMemo(
        () => getProviderAndSigner(account!, library, chainId!),
        [account, library, chainId]
    )
    return {
        connected: !!account,
        account,
        library,
        chainId: chainId!,
        provider,
        signer,
    }
}
