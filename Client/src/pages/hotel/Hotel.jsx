import "./Hotel.css"
import Navbar from '../../Components/navbar/navbar'
import Header from '../../Components/navbar/header/header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../Components/mailList/maiList"
import Footer from "../../Components/footer/footer"
import { useState } from "react"

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296399882.jpg?k=a7223f7a4a371b89b81b7437903cb227a7c57210396fc240ae488a4324210f41&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293011920.jpg?k=98bf69f1e15ae1a59b579d7757371c826698bd2e2c7c8a2ed2968a9c870a2c45&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293011927.jpg?k=df2639945a8a254e8a255d4c60a0c9548c913d8a32f3138db4bbf8dec82a97ec&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296399885.jpg?k=6d4decd1b51cfb9158532a32d5c43a3c5da07ba19f4ce9333715d01dd650836c&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293011947.jpg?k=37bb29586768e92dba27fa48cabfad6c76a76fc546f89fbc2080d3f2507d2422&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293011944.jpg?k=116dc1e8efbe5cc18d2647bf00a3a9824bfe7a1c1e9d035c52d1f42053a6d103&o=&hp=1"
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction==="l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
        } else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
        }

        setSlideNumber(newSlideNumber)
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over PKR20345 at this propert and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                            {photos.map((photo, i) => (
                        <div className="hotelImgWrapper">
                            <img onClick={(() => handleOpen(i))} src={photo.src} alt="" className="hotelImg" />
                        </div>
                            ))}
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">Stay In The Heart Of Islamabad</h1>
                                <p className="hotelDesc">
                                    Serenity Corner is a sustainable apartment in Islamabad, 13 miles from Shah Faisal Mosque. This property encourages guests to embrace nature with its eco-friendly arrangements. This apartment provides air-conditioned accommodations with a balcony. The apartment also features free Wifi, free private parking, and facilities for disabled guests.
                                    Featuring a terrace and mountain views, the spacious apartment includes 2 bedrooms, a living room, flat-screen TV, an equipped kitchen, and 2 bathrooms with a walk-in shower and a bath. Guests can take in the views of the garden from the patio, which also has outdoor furniture. The apartment offers bed linen, towels, and daily room service.
                                    A mini-market is available at the apartment.
                                    The area is popular for hiking, and car rental is available at the apartment. Guests can relax in the garden at the property.
                                    Taxila Museum is 11 miles from Serenity Corner, while Ayūb National Park is 12 miles from the property. The nearest airport is Islamabad International, 11 miles from the accommodation, and the property offers a paid airport shuttle service.
                                </p>
                            </div>
                            <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Islamabad, this proper has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>PKR45000</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Hotel