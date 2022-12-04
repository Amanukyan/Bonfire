import React, { ReactElement } from "react"
import useEnergyLeftQuery from "../../../hooks/useBonfireContract/useEnergyLeftQuery"

export default function EnergyLeftDisplay(): ReactElement {
    const { data: energyLeft } = useEnergyLeftQuery()
    return (
        <div className="flex flex-col text-gray-500 text-right">
            <span className="text-sm">Energy left</span>
            <span className="font-extrabold text-xl">
                {energyLeft?.toNumber()}
            </span>
        </div>
    )
}
