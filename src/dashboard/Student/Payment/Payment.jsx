import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const Payment = () => {
    const selectedClass = useLoaderData()
    const {price} = selectedClass;
    return (
        <div>
            my payment
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} price={price}>

                </CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;