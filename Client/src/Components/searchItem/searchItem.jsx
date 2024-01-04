import "./searchItem.css"

const SearchItem = () =>{
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/296399887.webp?k=9cf50ba5e4011a66a4c89881dd1096d5d564bed19ca62cff0724c0fc09b00281&o=" 
            alt="" 
            className="siImg" 
            />
            <div className="siDesc">
                <h1 className="siTitle">Serenity Corner</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siFeatures">
                    Entire studio + 1 bathroom + 21m^2 1 full bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">PKR 40000</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See Availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem