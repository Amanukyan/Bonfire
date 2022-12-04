import Image from "next/image"
import React, { ReactElement } from "react"

export default function Header(): ReactElement {
    return (
        <div className="w-full">
            <div className="flex flex-row justify-center gap-2 items-center w-full max-w-md mx-auto py-8 border-b">
                <Image
                    src="/bonfire.svg"
                    alt="bonfire"
                    width={40}
                    height={40}
                />
                <span className="font-display text-4xl">Bonfire</span>
            </div>
        </div>
    )
}
