function Card({ children, width, height }) {
    let widthCal = `${width} ${height} rounded-xl mx-5 mb-5 bg-gray-800 flex flex-col justify-between`;

    return (
        <div className={widthCal}>
            {children}
        </div>
    )


}

export default Card