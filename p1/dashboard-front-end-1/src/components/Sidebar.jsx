import NavButton from './Button'

function Sidebar() {
  return (
    <div className="w-[15vw] h-[90vh] flex flex-col items-center">
      <NavButton to="/" imagePath="/assets/dashboard.png" label="Dashboard" className="w-full" />
      <NavButton to="/Favorites" imagePath="/assets/favorite.png" label="Favorites" />
      <NavButton to="/Market" imagePath="/assets/market.png" label="Market" />
    </div>
  )
}

export default Sidebar