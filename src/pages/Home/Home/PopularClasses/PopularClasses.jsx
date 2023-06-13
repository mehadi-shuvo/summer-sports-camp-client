import { useEffect } from "react";
import { useState } from "react";
import ClassInfo from "../../../ClassesPage/ClassInfo";


const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    const [popularClasses, setPopularClasses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/class/popular')
        .then(res=> res.json())
        .then(data=> setClasses(data))

        const popular = classes.slice(0,6);
        setPopularClasses(popular)
    },[classes])
    return (
        <div className="w-4/5 mx-auto">
             <h4 className="text-4xl text-orange-500 text-center font-bold py-10">Popular Classes</h4>
             <div className="grid md:grid-cols-3 gap-5">
                {
                    popularClasses.map(item=> <ClassInfo key={item._id} item={item}></ClassInfo>)
                }
             </div>
        </div>
    );
};

export default PopularClasses;