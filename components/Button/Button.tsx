import React, { ReactElement, ReactNode } from "react"
import { clsx } from "clsx"

type ButtonStyle = "primary" | "secondary"

type Props = {
    style: ButtonStyle
    children: ReactNode
    className?: string
    onClick: () => void
}

export default function Button({
    style,
    children,
    className,
    onClick,
}: Props): ReactElement {
    return (
        <button
            className={clsx(
                className,
                "rounded-full py-1 w-full text-sm border-1",
                style === "primary"
                    ? "bg-primary-blue border-primary-blue text-white"
                    : "bg-white/50 border-secondary-gray text-secondary-gray"
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
