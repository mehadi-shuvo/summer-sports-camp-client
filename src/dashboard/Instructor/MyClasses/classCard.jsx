import { FaFlag, FaUsers } from "react-icons/fa";


const ClassCard = ({item}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[200px] min-w-full" src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.className}
                    <div className="badge bg-orange-500 text-white py-3 px-4 uppercase">{item.status}</div>
                </h2>
                <p className="flex gap-2 items-center"><FaUsers></FaUsers>  Enrolled: {item.enrolled}</p>
                <p className="flex gap-2 items-center">{item?.feedback ? <><FaFlag></FaFlag>  Feedback: {item?.feedback}</>: '' }</p>
                <div className="card-actions justify-center">
                   <button className="myBtn bg-orange-500 w-3/4 hover:text-orange-500">Update</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;