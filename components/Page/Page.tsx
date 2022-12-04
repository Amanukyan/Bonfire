import React, { ReactElement, ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Page({ children }: Props): ReactElement {
    return (
        <div className="flex flex-col w-full mx-auto max-w-md pt-8">
            {children}
        </div>
    )
}
