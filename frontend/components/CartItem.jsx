import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";
import Link from "next/link";

const CartItem = ({ id, quantity, size }) => {
  const [item, setItem] = useState({});
  const {
    cartItems,
    setCartItems,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
    closeCart,
  } = useShoppingCart();
  const route =
    item.name?.replace(/\s+/g, "-").toLowerCase() + "-" + "p" + id.toString();

  useEffect(() => {
    const getItemFromServer = async () => {
      const domain =
        process.env.NODE_ENV == "development"
          ? "http://localhost:5001/"
          : "https://notarealstore.herokuapp.com/";
      const responce = await fetch(`${domain}api/item/${id}`);
      const fetchedItem = await responce.json();
      setItem(fetchedItem);
      setCartItems((currItems) => {
        if (currItems?.find((i) => i.id === id) == null) {
          return;
        } else {
          return currItems?.map((i) => {
            if (i.id === id) {
              return { ...i, ...fetchedItem };
            } else {
              return i;
            }
          });
        }
      });
    };
    getItemFromServer();
  }, [cartItems.length]);

  if (item.price == null) return null;

  return (
    <div className="flex h-96 w-80 text-[10px] text-start">
      <div>
        <Link href="/item/[id]" as={`/item/${route}`}>
          <h2 className="font-normal py-1">{item.name}</h2>
        </Link>
        <div className="flex">
          <div>
            <Link href="/item/[id]" as={`/item/${route}`}>
              <img
                src={`${item.mainImg}`}
                alt="/"
                className="cursor-pointer max-h-[880px]"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between font-light w-96 pl-2 ">
            <div>
              <p>{item.color}</p>
              <p>{size}</p>
              <div className="flex justify-between font-bold w-10">
                <button
                  onClick={() => decreaseItemQuantity(id, size)}
                  className="text-lg font-light"
                >
                  -
                </button>
                <div className="self-center">{quantity}</div>
                <button
                  onClick={() => {
                    increaseItemQuantity(id, item.mainImg, size);
                    closeCart();
                  }}
                  className="text-lg font-light"
                >
                  +
                </button>
              </div>
            </div>
            <div>{formatCurrency(item.price / 100)}</div>
            <button
              onClick={() => removeFromCart(id, size)}
              className="text-start"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
