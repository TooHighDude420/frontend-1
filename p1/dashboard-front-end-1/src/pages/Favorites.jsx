import registry from "../singleton"
import { useEffect, useState } from "react"
import Card from "../components/Card";
import { Link } from "react-router-dom";
import CryptoContent from "../components/CryptoContent";

function Favorites({ cache }) {
    const favoMan = registry.getInstance("favorites");
    const [favs, setFavorites] = useState([
        ...favoMan.getAllFavorites()
    ]);

    function handleFav(coin) {
        favoMan.addToFavorites(coin);
        setFavorites([
            ...favoMan.getAllFavorites()
        ]);
    }

    return (
        <div className="w-[85vw] h-[90vh]">
            {
                favs.map((fav, index) => {
                    amountOfCards++;
                    return (
                        <Card width="min-w-[33vw]" height="min-h-[20vh]">
                            <Link to={`/Detail/${fav}`}>
                                <CryptoContent coinName={fav} cache={cache} />
                            </Link>
                            <button onClick={() => handleFav(fav)}>
                                <p>Favorite</p>
                            </button>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Favorites