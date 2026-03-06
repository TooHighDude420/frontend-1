import Card from "../components/Card"
import CryptoContent from "../components/CryptoContent";

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

function Market({ favorites }) {

    let cardCollection = [];

    // choiseDict.forEach(val => {
    //     let thing = (
    //         <Card width="min-w-1/4" height="min-h-[20vh]">
    //             <CryptoContent coinName={val} time={5} />
    //         </Card>
    //     );

    //     cardCollection.push(thing);
    // });

    return (
        <div className="min-w-[85vw] max-h-[90vh] text-white overflow-y-scroll">
            <div className="grid grid-cols-4">
                {cardCollection}
            </div>
        </div>
    )
}

export default Market