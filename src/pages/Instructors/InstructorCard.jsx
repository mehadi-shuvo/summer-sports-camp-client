

const InstructorCard = ({instructor}) => {
    return (
        <div className={`card bg-orange-200 shadow-xl`}>
            <figure><img className="mask mask-hexagon my-3" src={instructor.photo} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-4xl text-orange-500 font-bold capitalize">{instructor.name}</h2>
                <p className="text-slate-600 text-lg">{instructor.email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;