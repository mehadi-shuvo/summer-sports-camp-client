import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const FeedbackPage = () => {
    const data = useLoaderData();
    const [axiosSecure] =  useAxiosSecure()


    const feedbackHandler = (event) => {
        event.preventDefault();
        const feedback = event.target.feedback.value;
        const id = data._id;
        
        axiosSecure.patch(`https://sports-summer-camp-server.vercel.app/class/feedback/${id}`,{ feedback})
        .then(result=>{
            if(result.data.modifiedCount>0){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Feedback send successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error=>{
            console.log(error);
        })



    }
    return (
        <div className="flex justify-center items-center">
            <form 
            onSubmit={feedbackHandler}
            className="modal-box bg-orange-200 flex flex-col items-center">

                <div className="w-full mt-4">
                    <label className="font-bold text-lg text-slate-700 mb-3">Write Your Feedback</label><br />
                    <textarea 
                    name="feedback"
                    className="textarea border-orange-500 w-full" 
                    placeholder="Feedback"></textarea>
                </div>
                <button type="submit"
                    className="myBtn bg-orange-500 mt-4 w-1/3 mx-auto uppercase hover:text-orange-500">submit</button>
            </form>
        </div>
    );
};

export default FeedbackPage;