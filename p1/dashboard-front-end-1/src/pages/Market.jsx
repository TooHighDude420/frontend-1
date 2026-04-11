import Skeleton from "react-loading-skeleton";
import Card from "../components/Card"
import CryptoContent from "../components/CryptoContent";
import { useState } from "react";

const choiseDict = [
    "bitcoin",
    "ethereum",
    "tether",
    "binancecoin",
    "usd-coin",
    "ripple",
    "cardano",
    "dogecoin",
    "matic-network",
    "solana",
    "litecoin",
    "polkadot",
    "tron",
    "shiba-inu",
    "avalanche-2",
    "dai",
    "uniswap",
    "chainlink",
    "stellar",
    "vechain"
]

function filterList(querry) {
    return choiseDict.filter((item) => item.toLowerCase().includes(querry.toLowerCase()))
}

function Market({ favorites, cache, loading }) {
    const [displayList, setDisplayList] = useState(choiseDict);

    return (
        <div className="min-w-[85vw] max-h-[90vh] text-white overflow-y-scroll">
            <input type="text" onChange={() => {
                let search = document.getElementById("search").value;

                setDisplayList(filterList(search));
            }} id="search" />
            <div className="grid grid-cols-4">
                {displayList.map((val, index) => {
                    if (loading) {
                        return (
                            <Card width="min-w-1/4" height="min-h-[20vh]">
                                <Skeleton width="100%" height="20vh" />
                            </Card>
                        );
                    } else {
                        return (
                            <Card width="min-w-1/4" height="min-h-[20vh]">
                                <CryptoContent coinName={val} cache={cache} />
                            </Card>
                        );
                    }
                })}
            </div>
        </div>
    )
}

export default Market