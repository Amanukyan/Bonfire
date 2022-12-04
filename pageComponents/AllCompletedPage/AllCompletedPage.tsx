import React, { ReactElement } from "react"
import Page from "../../components/Page"

export default function AllCompletedPage(): ReactElement {
    return (
        <Page>
            <span className="w-full max-w-prose text-gray-500 text-sm">
                Congratulations! You have completed your journey. Here, you
                deserve some 🍷
            </span>
        </Page>
    )
}
