import React, { ReactElement } from "react"
import Button from "../../components/Button"
import Page from "../../components/Page"

import { InjectedConnector } from "@web3-react/injected-connector"
import { useWeb3React } from "@web3-react/core"
export const injected = new InjectedConnector({})

export default function ConnectWalletPage(): ReactElement {
    const { activate } = useWeb3React()
    return (
        <Page>
            <div className="flex flex-col gap-8">
                <span className="w-full max-w-prose text-gray-500 text-sm">
                    Please connect your wallet to begin the adventure.
                </span>
                <Button style="primary" onClick={() => activate(injected)}>
                    Connect Wallet
                </Button>
            </div>
        </Page>
    )
}
