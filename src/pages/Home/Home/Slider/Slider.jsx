import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

import './Slider.css'
import BannerContent from "./BannerContent";

const Banner = () => {

    return (
        <div>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="banner-bg-1 overly">
                    <div className="">
                        <BannerContent title='Summer Camp for Football Enthusiasts'></BannerContent>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="banner-bg-2 overly">
                    <BannerContent title='Join Our Action-Packed Summer Camp Experience'></BannerContent>
                </SwiperSlide>

                <SwiperSlide className="banner-bg-3 overly">
                    <BannerContent title='Unleash Your Basketball Skills at Our Summer Camp'></BannerContent>
                </SwiperSlide>

                <SwiperSlide className="banner-bg-4 overly">
                    <BannerContent title='Summer Tennis Camp for Aspiring Champions'></BannerContent>
                </SwiperSlide>

                <SwiperSlide className="banner-bg-5 overly">
                    <BannerContent title='Badminton Bonanza at Our Summer Camp'></BannerContent>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;