import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { render } from "@react-email/render";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Email from "../emails/order-confirmation";
import { useRouter } from "next/router";

const stripePromise = loadStripe(
  "pk_test_51MS91XHmqQVhSPeIBy2TsayRK4DqWBynbDumcPs6pxMCz4gGlJ8w61U3abKqzetZB6zMbLZaYMLgzxBs8XwsML0n00cBVPBw6K"
);

const CheckoutForm = () => {
  const { userName, setCartItems } = useShoppingCart();
  const [loading, setLoading] = useState(false);
  const domain =
    process.env.NODE_ENV == "development"
      ? "http://localhost:5001/"
      : "https://notarealstore.herokuapp.com/";
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("card element");
    console.log(elements.getElement(CardElement));

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(`${domain}api/checkout`, {
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
          const response = await fetch(`${domain}api/emails/confirmation`, {
            method: "POST",
            headers: new Headers({
              Authorization: header,
              "Content-Type": "application/json",
            }),
            body: JSON.stringify({
              html: markup,
            }),
          });
          setCartItems([]);
          if (response.status === 200) {
            router.push("/confirmation");
            console.log("All good");
          }
          if (response.status === 500) {
            const res = await response.json();
            router.push("/confirmation");
            console.log(res.msg);
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
    <>
      <Head>
        <title>Checkout - NotARealStore</title>
      </Head>
      <Elements stripe={stripePromise}>
        <div className="flex-col w-screen h-screen pt-48 px-5 md:px-10 backdrop-blur-[13px] bg-white/90">
          {token ? (
            <>
              <h1 className="mb-10 text-gray-300">ENTER YOUR CARD DETAILS</h1>
              <h1 className="text-red-600">
                DO NOT ENTER YOUR CREDIT CARD INFORMATION SO YOU DON'T GET
                ACTUALLY CHARGED.
              </h1>
              <p className="mb-2 jostfamily">
                If you wanna try making a payment and getting a confirmation
                e-mail, use the following test credit card info:
              </p>
              <div className="jostfamily">
                <p>Number: 4242 4242 4242 4242</p>
                <p>Expiration date: 11/44</p>
                <p>CVC: 444</p>
                <p className="mb-9">ZIP: 44444</p>
              </div>

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
    </>
  );
};

export default checkout;
