import about from '../../../../assets/about.jpg'

const AboutUs = () => {
    return (
        <div className='bg-orange-200 mb-20 py-8 md:py-0'>
            <div className='w-4/5 mx-auto'>
                <div className='md:flex items-center'>
                    <div>
                        <img className="mask md:mask-parallelogram mask-squircle" src={about} alt="" />
                    </div>
                    <div className='my-10'>
                        <h3 className='text-4xl font-bold text-slate-700 '>About Us</h3>
                        <p className='text-lg font-light mt-4 text-slate-600'>Year after year, families tell us why they choose Hello Summer as a priority place for their kids to spend summer holidays at and to have the best time ever.</p>
                        <button className='myBtn bg-orange-500 hover:text-orange-500 w-[200px] mt-5'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;