import { Web3Provider } from "@ethersproject/providers"

export default class Web3Context {
    account?: string
    library: Web3Provider
    chainId: number

    constructor(
        account: string | undefined,
        library: Web3Provider,
        chainId: number
    ) {
        this.account = account
        this.library = library
        this.chainId = chainId
    }
}
