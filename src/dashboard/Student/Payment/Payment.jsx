import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const Payment = () => {
    const selectedClass = useLoaderData()
    const {price} = selectedClass;
    return (
        <div>
            <Helmet>
                <title>Payment</title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} price={price}>

                </CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;