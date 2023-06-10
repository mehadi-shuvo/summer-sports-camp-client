import useUserRole from "../../hooks/useUserRole";


const ClassInfo = ({ item }) => {
    const {seats} = item;
    const [userRole] = useUserRole()
    return (
        <div className={`card card-compact bg-orange-200 shadow-xl ${seats === 0 && 'bg-red-500 text-white'}`}>
            <figure><img className="" src={item.image} alt="Shoes" /></figure>
            <div className="py-4 px-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl text-orange-500 font-bold">{item.className}</h2>
                    <p className="bg-orange-500 text-white text-base font-bold capitalize py-2 px-4 rounded-lg">price $ {item.price}</p>
                </div>
                <h4>Available Seats: {item.seats}</h4>
                <div className="divider before:bg-orange-500 after:bg-orange-500"></div>
                <p className="text-lg text-orange-500 tracking-wider underline">Instructor</p>
                <p className="text-xl text-slate-700 font-bold capitalize tracking-wider">{item.name}</p>
                <p className="text-base text-slate-700">{item.email}</p>
                <div className="card-actions justify-center">
                    <button disabled={seats === 0|| userRole ==='admin' || userRole === 'instructor'}  className="btn myBtn bg-orange-500 hover:text-orange-500 disabled:border-none">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassInfo;