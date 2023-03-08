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
        <title>Cart - Damn Shop</title>
      </Head>
      <div
        className={`relative flex justify-center h-screen w-screen pb-[48px] pt-20 md:pt-40 md:px-20 bg-white/70`}
      >
        <div className="flex flex-col md:flex-row md:h-96 md:min-w-[400px] bg-white rounded-3xl overflow-auto pl-6 pb-6 md:pb-0 hide-scroll overscroll-contain">
          {cartItems.length !== 0 ? (
            cartItems.map((item, index) => (
              <CartItem
                key={index}
                id={item.id}
                quantity={item.quantity}
                size={item.size}
              />
            ))
          ) : (
            <div className="self-center md:w-full ml-[-12px] flex flex-col items-center">
              <h1 className="text-xs">YOU CART IS EMPTY</h1>{" "}
              <Link className="cursor-pointer underline" href="/">
                shop now
              </Link>{" "}
            </div>
          )}
        </div>
        {cartItems.reduce(
          (total, cartItem) =>
            total + (cartItem.price / 100) * cartItem.quantity,
          0
        ) > 0 && (
          <div className="absolute flex items-center justify-end p-3 pl-1 bottom-0 right-0 left-0 space-x-8 text-sm bg-slate-200/80">
            <h6 className="font-light">{`TOTAL ${formatCurrency(
              cartItems.reduce(
                (total, cartItem) =>
                  total + (cartItem.price / 100) * cartItem.quantity,
                0
              )
            )}`}</h6>
            <Link href="/checkout">
              <button className=" backdrop-blur-3xl bg-black/75 text-white font-light pt-1 px-11">
                CONTINUE
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default cart;
