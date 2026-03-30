import registry from "../singleton"
import { useEffect } from "react"

let regs = null;
let favoMan = null;

function Favorites({ favorites, cache }) {
    regs = registry;
    favoMan = regs.getInstance("favorites");
    let favlist = favoMan.getAllFavorites();

    console.log(favlist);

    return (
        <div className="w-[85vw] h-[90vh]">
            {favlist}
        </div>
    )
}

export default Favorites