import type { AppProps } from "next/app"
import { useState } from "react"
import Header from "../components/Header"
import "../styles/globals.css"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { Web3Provider as EthersWeb3Provider } from "@ethersproject/providers"
import { Web3ReactProvider } from "@web3-react/core"
import { ethers } from "ethers"
import { Toaster } from "react-hot-toast"

const getLibrary = (
    provider:
        | ethers.providers.ExternalProvider
        | ethers.providers.JsonRpcFetchFunc
) => new EthersWeb3Provider(provider)

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <QueryClientProvider client={queryClient}>
                <Toaster position="bottom-center" />
                <div className="flex flex-col">
                    <Header />
                    <Component {...pageProps} />
                </div>
            </QueryClientProvider>
        </Web3ReactProvider>
    )
}
