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
        /* TODO: 1. Button */
        null
    )
}
