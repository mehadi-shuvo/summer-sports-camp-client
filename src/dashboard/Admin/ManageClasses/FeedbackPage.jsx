

const FeedbackPage = () => {


    const feedbackHandler = (id) => {
        console.log(Id);
        // axiosSecure.put(`/class/deny/${id}`)
        //     .then(res => {
        //         console.log('success', res);
        //         refetch()
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })


    }
    return (
        <div>
            <form method="dialog" className="modal-box bg-orange-200 flex flex-col items-center">
                <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-orange-500 text-white hover:bg-orange-800">✕</button>
                <div className="w-full mt-4">
                    <label className="font-bold text-lg text-slate-700 mb-3">Write Your Feedback</label><br />
                    <textarea className="textarea border-orange-500 w-full" placeholder="Feedback"></textarea>
                </div>
                <button
                    onClick={() => feedbackHandler()}
                    className="myBtn bg-orange-500 mt-4 w-1/3 mx-auto uppercase hover:text-orange-500">submit</button>
            </form>
        </div>
    );
};

export default FeedbackPage;