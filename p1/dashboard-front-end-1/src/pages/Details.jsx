import { useState } from "react";
import { useParams } from "react-router-dom"
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";


function Details({ favorites, cache }) {
    const coin = useParams();
    const coinData = cache.get(coin.coin.toLowerCase());
    console.log(coinData)
    console.log(coin.coin)

    return (
        <div className="w-[85vw] h-[90vh] text-white">
            {
                <div className="h-[90%] w-full flex justify-center">
                    <LineChart width="100%" height="100%" data={coinData}>
                        <Tooltip />
                        <XAxis dataKey="time" />
                        <YAxis datakey="price" />
                        <Line type="monotone" dataKey="price" dot={null} />
                    </LineChart>
                </div>
            }
        </div >
    )
}

export default Details