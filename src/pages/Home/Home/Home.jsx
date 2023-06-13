import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs/AboutUs";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopulerInstructors/PopularInstructors";
import Banner from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SSCamp | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;