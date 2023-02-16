

const Card = (data) => {
    console.log("ne geliyo", data)
    return(
        <div className="cards">
            <div className="title">
                <h1>{data.title}</h1>
            </div>
            <div>
                <h1>
                    {}
                </h1>
            </div>
        </div>
    )
}

export default Card;