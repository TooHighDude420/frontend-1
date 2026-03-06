import LineGraph from "./LineGraph"
import { useEffect, useState } from "react";

function ChangeHolder({ change }) {
    if (change < 0) {
        return (
            <div>
                <p className="text-red-500">{change.toFixed(2)}%</p>
            </div>
        )
    } else {
        return (
            <div>
                <p className="text-green-600">{change.toFixed(2)}%</p>
            </div>
        )
    }

}

export default ChangeHolder