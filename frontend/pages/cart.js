import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";

const cart = () => {
  const { cartItems, closeCart } = useShoppingCart();

  useEffect(() => closeCart(), []);

  return (
    <>
      <Head>
        <title>Cart - NotARealStore</title>
      </Head>
      <div
        className={
          cartItems?.length !== 0
            ? "relative flex justify-start h-screen w-screen pb-[48px] pt-[79px] md:pt-40 md:px-20"
            : "relative flex justify-center items-center h-screen w-screen pb-[48px] md:pb-[200px] pt-[79px] md:pt-40 md:px-20"
        }
      >
        <div className="flex flex-col md:flex-row items-center justify-start md:h-96 md:min-w-[400px] pl-7 md:pl-0 pb-6 md:pb-0 overflow-auto hide-scroll overscroll-contain">
          {cartItems?.length !== 0 ? (
            cartItems?.map((item, index) => (
              <CartItem
                key={index}
                id={item.id}
                quantity={item.quantity}
                size={item.size}
              />
            ))
          ) : (
            <div className="md:self-center md:w-full flex flex-col items-center justify-center">
              <h1 className="text-xs">YOUR CART IS EMPTY</h1>
              <Link className="cursor-pointer underline" href="/">
                shop now
              </Link>
            </div>
          )}
        </div>
        {cartItems && cartItems?.length !== 0 ? (
          <div className="fixed flex items-center justify-end p-3 pl-1 bottom-0 right-0 left-0 space-x-8 text-sm bg-slate-200">
            <h6 className="font-light">{`TOTAL ${formatCurrency(
              cartItems?.reduce(
                (total, cartItem) =>
                  total + (cartItem.price / 100) * cartItem.quantity,
                0
              )
            )}`}</h6>
            <Link href="/checkout">
              <button className="bg-black/75 text-white font-light pt-1 px-11">
                CONTINUE
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default cart;
