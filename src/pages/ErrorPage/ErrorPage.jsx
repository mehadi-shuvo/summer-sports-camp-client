import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="error h-screen">
            <div className="w-full h-full bg-[#000000a4] flex justify-center items-center flex-col gap-10">

                        <h4 className='text-7xl text-orange-500 font-black -tracking-tighter animate-bounce'>4<samp className='text-white'>0</samp>4</h4>
                        <p className='text-4xl text-white font-light tracking-wider'>Page not found</p>
                        <Link className='myBtn bg-orange-500 hover:text-orange-500'>Go to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;