import ChainId from "./ChainId"
import { Web3Provider } from "@ethersproject/providers"
import { ethers } from "ethers"
import { ALCHEMY_API_KEY } from "../../env"
import ProviderCache from "./ProviderCache"

const providerCache = new ProviderCache()

export function getAlchemyProvider(chainId: ChainId) {
    return new ethers.providers.AlchemyProvider(chainId, ALCHEMY_API_KEY)
}

export default function getProviderAndSigner(
    account: string | undefined,
    library: Web3Provider,
    chainId: ChainId
) {
    const { provider, signer } = providerCache.getCachedOrBuild(
        account,
        () => {
            if (!account) return getAlchemyProvider(chainId)
            const provider = library
                .getSigner()
                .connectUnchecked() as unknown as ethers.providers.Web3Provider
            provider.getNetwork = library.getNetwork
            return provider
        },
        chainId
    )
    return [provider, signer]
}
