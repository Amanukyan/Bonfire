import React, { ReactElement, ReactNode } from "react"
import { clsx } from "clsx"

type ButtonStyle = "primary" | "secondary"

type Props = {
    style: ButtonStyle
    children: ReactNode
    className?: string
    disabled?: boolean
    onClick: () => void
}

export default function Button({
    style,
    children,
    className,
    disabled,
    onClick,
}: Props): ReactElement {
    return (
        <button
            className={clsx(
                className,
                "rounded-full py-1 w-full text-sm border-1",
                disabled && "opacity-50",
                style === "primary"
                    ? "bg-primary-blue border-primary-blue text-white"
                    : "bg-white/50 border-secondary-gray text-secondary-gray"
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
