import React, { ReactElement } from "react"
import Button from "../components/Button"
import useWallet from "../hooks/useWallet"
import ConnectWalletPage from "../pageComponents/ConnectWalletPage"
import HomePage from "../pageComponents/HomePage"

export default function Home(): ReactElement {
    const { connected } = useWallet()

    return connected ? <HomePage /> : <ConnectWalletPage />
}
