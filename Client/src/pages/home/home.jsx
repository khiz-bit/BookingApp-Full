import Featured from "../../Components/featured/featured"
import FeaturedProperties from "../../Components/featuredProperties/featuredProperties"
import Footer from "../../Components/footer/footer"
import MailList from "../../Components/mailList/maiList"
import Header from "../../Components/navbar/header/header"
import Navbar from "../../Components/navbar/navbar"
import PropertyList from "../../Components/propertyList/propertyList"
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Explore Pakistan</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home