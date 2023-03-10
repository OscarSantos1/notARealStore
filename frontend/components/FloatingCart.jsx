import Link from "next/link";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillBagFill } from "react-icons/bs";
import { useShoppingCart } from "../context/ShoppingCartContext";

const FloatingCart = () => {
  const {
    openCart,
    closeCart,
    cartQuantity,
    isOpen,
    lastAdded,
    setFastClose,
    stopClose,
  } = useShoppingCart();

  useEffect(() => {
    const element = document.getElementById("floating-cart");

    if (element) {
      element.addEventListener("mouseover", () => {
        console.log("in");
        stopClose();
      });
    }
  }, []);

  return (
    <div className=" relative w-screen flex justify-center ">
      <Link
        href="/cart"
        id="floating-cart"
        className={`fixed flex flex-col justify-center items-center bottom-10 text-black border-[#ff1249] pb-2 pt-1 ${
          isOpen
            ? "z-50 w-56 h-96 backdrop-blur-[10px] bg-[rgba(255,16,80,0.2)] rounded-[3rem] px-6 pt-0 bounce-in ease-in-out duration-500"
            : "z-10 w-20 h-10 bg-gradient-to-r from-[#ff1249] to-[#ff0364] rounded-full cursor-pointer"
        } ${
          !isOpen ? " bounce-out ease-in-out duration-500" : ""
        } overflow-clip `}
      >
        {isOpen && (
          <div className="flex flex-col text-xs font-light fade-in">
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeCart();
              }}
              className="flex z-20 self-center justify-center bg-[#ff1064] text-white w-14 rounded-full my-1 cursor-pointer"
            >
              <IoIosArrowDown size={20} />
            </div>
            <div className="rounded-3xl overflow-hidden h-60">
              <img src={`http://localhost:5001${lastAdded.image}`} />
            </div>
            <div className="font-normal mt-3">{lastAdded.name}</div>
            <div className="overflow-hidden mt-1">
              SIZE <span>{lastAdded.size}</span>{" "}
              <span className="font-normal">ADDED</span> TO YOUR CART
            </div>
          </div>
        )}
        <div
          onClick={() => closeCart()}
          className="h-full relative font-light flex flex-col justify-center items-center"
        >
          <div
            className={`absolute flex justify-center ${
              isOpen
                ? "bg-[#ff1064] bottom-[10px] p-2 w-28 "
                : "bg-transparent bottom-[2px] p-0"
            } rounded-full ease-in-out duration-1000 cursor-pointer`}
          >
            {!isOpen ? (
              <BsFillBagFill size={24} />
            ) : (
              <div className={`text-[10px] text-center font-normal fade-in`}>
                GO TO CART
              </div>
            )}
          </div>
          {cartQuantity > 0 && (
            <div
              onClick={() => (!isOpen ? openCart() : closeCart())}
              className={`absolute text-[#ff1064] ${
                isOpen ? "bottom-[15px]" : "bottom-[-2px]"
              } ease-in-out duration-1000 cursor-pointer`}
            >
              {!isOpen ? cartQuantity : ""}
            </div>
          )}
        </div>
      </Link>
      {isOpen && (
        <div
          onClick={() => {
            closeCart();
            setFastClose(true);
            stopClose();
          }}
          className="absolute h-screen bottom-0 z-30 bg-white/40 w-screen"
        ></div>
      )}
    </div>
  );
};

export default FloatingCart;
