/* Variables */

const CI: boolean = process.env.CI === "true"

export const SUPPORTED_NETWORKS: number[] =
    process.env.NEXT_PUBLIC_SUPPORTED_NETWORKS?.split(",").map(Number)!
export const ALCHEMY_API_KEY: string = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!

if (!CI && (!SUPPORTED_NETWORKS || !ALCHEMY_API_KEY)) {
    throw new Error(
        "Missing one or more environment variables. Please check your .env file."
    )
}
