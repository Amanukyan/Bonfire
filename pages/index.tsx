import React, { ReactElement } from "react"
import Button from "../components/Button"
import useWallet from "../hooks/useWallet"
import ConnectWalletPage from "../pageComponents/ConnectWalletPage"
import HomePage from "../pageComponents/HomePage"

export default function Home(): ReactElement {
    /* TODO: 2. display homepage if connected or connect wallet page if not */
    return (
        <Button style={"primary"} onClick={() => console.log("click")}>
            Start
        </Button>
    )
}
