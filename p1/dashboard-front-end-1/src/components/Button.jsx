import { Link, useLocation } from "react-router-dom"; 

function NavButton({ imagePath, to, label}) {
    const location = useLocation();
    let currentLoc = "";

    switch (location.pathname) {
        case "/":
            currentLoc = "Dashboard";
            break;

        default:
            currentLoc = location.pathname.replace("/", "");
    }

    if (currentLoc == label) {
        return (
            <Link to={to} className="w-full flex flex-col items-center bg-gray-400">
                <div className="w-[80%] h-[5dvh] flex gap-x-[10%] justify-center items-center text-white">
                    <img className="size-8" src={imagePath} alt={label} />
                    <p>{label}</p>
                </div>
            </Link>
        )
    } else {
        return (
            <Link to={to} className="w-full flex flex-col items-center">
                <div className="w-[80%] h-[5dvh] flex gap-x-[10%] justify-center items-center text-white">
                    <img className="size-8" src={imagePath} alt={label} />
                    <p>{label}</p>
                </div>
            </Link>
        )
    }
}

export default NavButton