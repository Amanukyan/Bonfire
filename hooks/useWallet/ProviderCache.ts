import { providers } from "@0xsequence/multicall"
import { ethers } from "ethers"

import Web3Context from "./Web3Context"

export default class ProviderCache {
    cache: {
        [account: string]: {
            chainId: Web3Context["chainId"]
            provider: providers.MulticallProvider
            signer: ethers.providers.Provider
        }
    } = {}

    getCachedOrBuild = (
        account: string | undefined,
        getProvider: () => ethers.providers.Provider,
        chainId: Web3Context["chainId"]
    ) => {
        account = account || ethers.constants.AddressZero
        if (
            !this.cache[account] ||
            (this.cache[account] && this.cache[account].chainId !== chainId)
        ) {
            const provider = getProvider()
            this.cache[account] = {
                chainId,
                provider: new providers.MulticallProvider(provider, {
                    timeWindow: 100,
                }),
                signer: provider,
            }
        }
        return this.cache[account]
    }
}
