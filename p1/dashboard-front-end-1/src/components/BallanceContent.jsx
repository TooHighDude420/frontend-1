import LineGraph from "./LineGraph"
import { useEffect, useState } from "react";

function BallanceContent({ wallet }) {
    let ballance = wallet["ballance"]

    return (
        <div className="px-5 py-5 text-white flex flex-col">
            <p className="text-lg"><b>Balance</b></p>
            <p className="text-5xl">$&nbsp;{ballance["held"].toFixed(2)}</p>
        </div>
    )
}

export default BallanceContent