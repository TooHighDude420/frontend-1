import registry from "../singleton"
import { useEffect, useState } from "react"
import Card from "../components/Card";
import { Link } from "react-router-dom";
import CryptoContent from "../components/CryptoContent";

function Favorites({ favorites, cache }) {
    const [favCards, setFavCards] = useState([]);
    const favoMan = registry.getInstance("favorites");

    let favlist = favoMan.getAllFavorites();

    function handleFav(coin) {
        favoMan.addToFavorites(coin);
        setFavCards([]);
    }

    let cardList = [];

    favlist.forEach(coin => {
        console.log(coin);
        console.log(favlist);

        let content =
            <Card width="min-w-[33vw]" height="min-h-[20vh]">
                <Link to="/Detail/Bitcoin">
                    <CryptoContent coinName={coin} cache={cache} />
                </Link>
                <button onClick={() => handleFav(coin)}>
                    <p>Favorite</p>
                </button>
            </Card>;

        cardList.push(content);
    });

    useEffect(() => {
        setFavCards(cardList);
    }, []);

    return (
        <div className="w-[85vw] h-[90vh]">
            {cardList}
        </div>
    )
}

export default Favorites