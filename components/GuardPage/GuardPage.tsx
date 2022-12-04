import Router from "next/router"
import { ReactElement, useEffect } from "react"
import useWallet from "../../hooks/useWallet"

type Props = {
    children: ReactElement
}

export default function GuardPage({ children }: Props) {
    const { connected } = useWallet()

    useEffect(() => {
        if (!connected) {
            Router.push("connect-wallet")
        }
    }, [connected])

    return children
}
