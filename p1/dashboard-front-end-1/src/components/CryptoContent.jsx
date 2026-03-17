import ChangeHolder from "./ChangeHolder";
import LineGraph from "./LineGraph";
import { useEffect, useState } from "react";

export const choiseDict = {
    "bitcoin": "BTC",
    "ethereum": "ETH",
    "tether": "USDT",
    "binancecoin": "BNB",
    "usd-coin": "USDC",
    "ripple": "XRP",
    "cardano": "ADA",
    "dogecoin": "DOGE",
    "matic-network": "MATIC",
    "solana": "SOL",
    "litecoin": "LTC",
    "polkadot": "DOT",
    "tron": "TRX",
    "shiba-inu": "SHIB",
    "avalanche-2": "AVAX",
    "dai": "DAI",
    "uniswap": "UNI",
    "chainlink": "LINK",
    "stellar": "XLM",
    "vechain": "VET"
}

function CryptoContent({ coinName, time, setLoadedCoins, cache, loading }) {
    let tmpitem = cache.get(coinName);

    let coinNameCap = coinName.replace(coinName.charAt(0), coinName.charAt(0).toLocaleUpperCase())
    let imagePath = `/assets/${coinName}.png`

    let latest = tmpitem[tmpitem.length - 1].price;
    let previous = tmpitem[tmpitem.length - 2].price;

    let changePerc = ((latest - previous) / previous) * 100;

    return (
        <>
            <div className="flex text-white mx-10 my-10 justify-between">
                <img className="size-8" src={imagePath} alt={coinName} />
                <p>{coinNameCap}</p>
                <p>{choiseDict[coinName]}</p>
            </div>
            <div className="flex">
                <div className="w-[75%] h-[10vh]">
                    <LineGraph data={tmpitem} />
                </div>
                <ChangeHolder change={changePerc} />
            </div>

        </>
    )
}

export default CryptoContent