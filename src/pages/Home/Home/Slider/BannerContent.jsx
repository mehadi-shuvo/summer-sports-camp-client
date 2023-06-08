import { Link } from "react-router-dom";

const BannerContent = ({title}) => {
    return (
        <div className="w-full h-full bg-[#00000085] py-28">
            <div className="w-4/5 mx-auto text-center">
                <p className="font-extrabold text-5xl text-white w-4/5 mx-auto mb-8">{title}</p>
                <Link className="myBtn bg-orange-500 mt-4" to='/'>Learn More</Link>
            </div>
        </div>
    );
};

export default BannerContent;