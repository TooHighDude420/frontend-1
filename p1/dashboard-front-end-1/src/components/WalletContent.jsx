import LineGraph from "./LineGraph"
import { useEffect, useState } from "react";
import { Pie, PieChart, Sector } from 'recharts';
import { choiseDict } from "./CryptoContent";

function WalletContent({ wallet }) {
    let coins = {};
    let coinsData = [];
    let display = [];
    let items = [];
    let total = 0;

    Object.entries(wallet).map(([name, meta]) => {
        if (name != "ballance") {
            coins[name] = meta["held"];
            coinsData.push({ "name": name, "amount": meta["held"], "fill": meta["hex"]});
            total += meta["held"];
            let imgloc = `/assets/${name}.png`;
            items.push(
                <div className="flex gap-x-2 items-center">
                    <img className="size-8" src={imgloc} alt="" />
                    <p>
                        <b>{name}</b> {meta["held"].toFixed(2)}
                    </p>
                </div>
            );
        }
    });

    display.push(
        <div className="flex flex-col gap-y-2">
            {items}
        </div>
    )

    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-1/5 flex flex-col justify-center flex-wrap">
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={coinsData}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="amount"
                    />
                </PieChart>
            </div>

            <div className="text-white w-3/4 pt-2">
                {display}
            </div>
        </div>


    )
}

export default WalletContent