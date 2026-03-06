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

function CryptoContent({ coinName, time, setLoadedCoins }) {
    const [data, setData] = useState([]);
    const [change, setChange] = useState(0.00)



    useEffect(() => {
        async function getCoinData(coinName, days) {
            let res = await fetch(
                `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${days}`
            );

            let data = await res.json();

            let formatted = data.prices.map(([time, price]) => ({
                time: new Date(time).toLocaleString(),
                price,
            }));

            setLoadedCoins(prev => [
                ...prev,
                {   
                    "name": coinName,
                    "value": formatted
                }
            ]);

            setData(formatted);

            let latest = formatted[formatted.length - 1].price;
            let previous = formatted[formatted.length - 2].price;

            let changePerc = ((latest - previous) / previous) * 100;
            setChange(changePerc);
        }

        getCoinData(coinName, 5);
    }, []);

    let coinNameCap = coinName.replace(coinName.charAt(0), coinName.charAt(0).toLocaleUpperCase())
    let imagePath = `/assets/${coinName}.png`

    const mockData = [
        { time: "00:00", price: 20012.34 },
        { time: "01:00", price: 20145.12 },
        { time: "02:00", price: 19987.56 },
        { time: "03:00", price: 23.78 },
        { time: "04:00", price: 200055.90 },
        { time: "05:00", price: 20010.45 },
        { time: "06:00", price: 20077.32 },
        { time: "07:00", price: 20098.21 },
        { time: "08:00", price: 20123.54 },
        { time: "09:00", price: 20087.12 },
        { time: "10:00", price: 20110.45 },
        { time: "11:00", price: 20095.67 },
        { time: "12:00", price: 20120.89 },
        { time: "13:00", price: 20088.34 },
        { time: "14:00", price: 20115.21 },
        { time: "15:00", price: 20140.78 },
        { time: "16:00", price: 20105.12 },
        { time: "17:00", price: 20125.45 },
        { time: "18:00", price: 20150.67 },
        { time: "19:00", price: 20122.34 },
        { time: "20:00", price: 20148.56 },
        { time: "21:00", price: 20170.12 },
        { time: "22:00", price: 20155.78 },
        { time: "23:00", price: 20180.45 },
    ];

    return (
        <>
            <div className="flex text-white mx-10 my-10 justify-between">
                <img className="size-8" src={imagePath} alt={coinName} />
                <p>{coinNameCap}</p>
                <p>{choiseDict[coinName]}</p>
            </div>
            <div className="flex">
                <div className="w-[75%] h-[10vh]">
                    <LineGraph data={data} />
                </div>
                <ChangeHolder change={change} />
            </div>

        </>
    )
}

export default CryptoContent