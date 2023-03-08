import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { render } from "@react-email/render";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Email from "../emails/order-confirmation";
import { useRouter } from "next/router";

const stripePromise = loadStripe(
  "pk_test_51MS91XHmqQVhSPeIBy2TsayRK4DqWBynbDumcPs6pxMCz4gGlJ8w61U3abKqzetZB6zMbLZaYMLgzxBs8XwsML0n00cBVPBw6K"
);

const CheckoutForm = () => {
  const { userName, cartItems, setCartItems } = useShoppingCart();
  const [loading, setLoading] = useState(false);
  const APP_API_URL = "http://localhost:5001";
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(`${APP_API_URL}/api/checkout`, {
          id,
          amount: 10000,
        });
        elements.getElement(CardElement).clear();
        if (data.msg === "Successful payment") {
          const header =
            "Bearer " + localStorage.getItem("jwt-token").replace(/"|'/g, "");
          const markup = render(<Email userName={userName} />, {
            pretty: true,
          });
          // SENDING EMAIL
          const response = await fetch(
            `${APP_API_URL}/api/emails/confirmation`,
            {
              method: "POST",
              headers: new Headers({
                Authorization: header,
                "Content-Type": "application/json",
              }),
              body: JSON.stringify({
                html: markup,
              }),
            }
          );
          setCartItems([]);
          if (response.status === 200) {
            router.push("/confirmation");
          }
          if (response.status === 500) {
            const { error } = await response.json();
            alert(error);
          }
        } else {
          alert("Somenthing went wrong with your payment");
        }
      } catch (error) {
        console.log(error);
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="mb-10 border-b border-black/30 pb-1" />
      <button
        className="bg-black w-full pt-1 text-white font-light"
        disabled={!stripe}
      >
        {loading ? "LOADING..." : "BUY"}
      </button>
    </form>
  );
};

const checkout = () => {
  const { token } = useShoppingCart();

  return (
    <Elements stripe={stripePromise}>
      <div className="flex-col w-screen h-screen pt-48 px-5 md:px-10 backdrop-blur-[13px] bg-white/90">
        {token ? (
          <>
            <h1 className="mb-20">ENTER YOUR CARD DETAILS</h1>
            <div className="h-72 w-full md:w-1/2 lg:w-1/3 mb-16">
              <CheckoutForm />
            </div>
          </>
        ) : (
          <div className="flex justify-center font-light mt-36">
            <div className="bg-black text-white py-2 pt-3 p-4">
              LOG IN TO COMPLETE YOUR ORDER
            </div>
          </div>
        )}
      </div>
    </Elements>
  );
};

export default checkout;
