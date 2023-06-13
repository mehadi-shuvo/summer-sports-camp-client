import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopulerInstructors/PopularInstructors";
import Banner from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;