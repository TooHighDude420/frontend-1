import { useParams } from "react-router-dom"

function Details({ favorites, cache }) {
    const coin = useParams();
    const coinData = cache.get(coin.coin.toLowerCase());
    const dispList = [];

    coinData.forEach(element => {
        console.log(element);
        let dispElement = <div>
            <p>{element.price}</p>
            <p>{element.time}</p>
        </div>;

        dispList.push(dispElement);
    });

    return (
        <div className="w-[85vw] h-[90vh]">
            {dispList}
        </div>
    )
}

export default Details