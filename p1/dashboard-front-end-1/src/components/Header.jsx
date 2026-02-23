function Header({activePage}) {
  return (
    <>
        <div className="w-full h-[10vh]">
            <div className="flex flex-wrap justify-center items-center h-full text-white">
                <div className="w-1/4">
                    <p className="w-fit">LOGO</p>
                </div>
                <div className="w-2/4 ">
                <div className="flex justify-center items-center">
                    <p className="w-fit text-lg">{activePage}</p>
                </div>
                </div>
                <div className="w-1/4 justify-center">
                    <div className="flex gap-x-2 items-center w-[40%] justify-self-end">
                        <div className="size-12 bg-gray-950 rounded-full"></div>
                        <div>
                            <p className="h-fit text-lg">John Doe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header