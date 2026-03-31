import registry from "../singleton"
import { useEffect, useState } from "react"
import Card from "../components/Card";
import { Link } from "react-router-dom";
import CryptoContent from "../components/CryptoContent";

let regs = null;
let favoMan = null;

function handleFav(coin) {
    favoMan.addToFavorites(coin);
}

function Favorites({ favorites, cache }) {
    const [favCards, setFavCards] = useState([]);

    regs = registry;
    favoMan = regs.getInstance("favorites");
    let favlist = favoMan.getAllFavorites();

    useEffect(() => {
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

            setFavCards(prev => {
                return [...prev, content]
            });
        });
    }, []);

    return (
        <div className="w-[85vw] h-[90vh]">
            {favCards}
        </div>
    )
}

export default Favorites