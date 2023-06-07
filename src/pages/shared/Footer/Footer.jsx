import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="p-10 bg-orange-400 text-white">
            <div className="grid md:grid-cols-4 gap-5">
                <div>
                    <p className="text-2xl font-bold">Summer<span className="text-red-500">Camp</span></p>
                    <p>summerCamp Industries Ltd.<br />Providing reliable toy since 2006</p>
                </div>
                <div>
                    <span className="footer-title block mb-2">Contact Info</span>
                    <a className="link link-hover block">+880 1700000004</a>
                    <a className="link link-hover">+880 1700000007</a>
                    <a className="link link-hover block">sportscamp.info@gmail.com</a>
                </div>
                <div>
                    <span className="footer-title block mb-2">Address</span>
                    <address>
                        Block: A, Road:7, section: 6<br></br> Mirpur, Dhaka
                    </address>
                </div>
                <div className="">
                    <span className="footer-title block mb-2">Social</span>
                    <div className="flex gap-5 text-3xl text-white">
                        <a className="link link-hover"><FaFacebook></FaFacebook></a>
                        <a className="link link-hover"><FaYoutube></FaYoutube></a>
                        <a className="link link-hover"><FaInstagramSquare></FaInstagramSquare></a>
                    </div>
                </div>
            </div>
            <p className="text-center mt-4">Copyright © 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;