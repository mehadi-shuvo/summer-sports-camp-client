import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ClassInfo from "./ClassInfo";
import { Helmet } from "react-helmet-async";


const ClassesPage = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/class/approved');
        return res.data;
    })




    return (
        <div>

            <Helmet>
                <title>SSCamp | Classes</title>
            </Helmet>
            <h3 className="text-center text-4xl text-orange-500 font-bold bg-orange-200 py-20">Our Premium Classes</h3>

            <div className="w-4/5 mx-auto grid grid-cols-3 gap-5 my-10">
                {
                    classes.map(item => <ClassInfo
                        key={item._id}
                        item={item}
                    ></ClassInfo>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;