import React, { useState, useEffect } from "react";
import Link from "next/link";
import LogIn from "./LogIn";
import { IoIosMenu } from "react-icons/io";
import { useRouter } from "next/router";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { token, userName } = useShoppingCart();
  const [nav, setNav] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();

  const handleNav = (c) => {
    router.push(`/catalogue/${c}`);
    setTimeout(() => {
      setNav(!nav);
    }, 170);
  };

  const handleLogin = () => {
    setLogin(!login);
    setRegister(false);
    setEmail("");
    setPass("");
    setConfirm("");
  };
  const closeLogin = () => {
    setLogin(!login);
  };

  return (
    <div className={`fixed left-0 right-0 top-0 z-20 text-black`}>
      <div className="relative m-auto flex justify-between items-center p-2 pr-5">
        <div className="absolute flex items-stretch top-[43px] ease-in duration-300 bg-gradient-to-r from-[#ff1064] to-[#ff1741] pb-2 md:pb-4 pl-4 md:pl-6">
          <Link href="/">
            <h1 className="z-40 ease-in duration-50 text-lg md:text-4xl">
              DAMN SHOP
            </h1>
          </Link>
        </div>
        <div
          className={
            nav
              ? "z-50 ease-in-out duration-300"
              : "z-10 ease-in-out duration-300"
          }
        >
          <IoIosMenu
            size={25}
            color={"black"}
            className="cursor-pointer"
            onClick={() => setNav(!nav)}
          />
        </div>
        <div className="flex space-x-4 font-light text-md text-black">
          {!token ? (
            <button
              onClick={handleLogin}
              className="border border-black pt-1 px-2 cursor-pointer"
            >
              LOG IN
            </button>
          ) : (
            <Link href="/user">
              <button
                className={`border border-black pt-1 px-2 cursor-pointer`}
              >
                {userName.toUpperCase()}
              </button>
            </Link>
          )}
          <button className="pt-1 cursor-pointer">ABOUT</button>
        </div>
      </div>
      <div
        className={
          nav
            ? "z-40 absolute top-0 md:top-[8px] left-0 min-w-[320px] md:max-w-[500px] md:w-1/3 lg:w-1/3 flex flex-col opacity-1 justify-center bg-transparent ease-in-out duration-700 md:duration-500"
            : "absolute top-0 md:top-[8px] left-[-100%]  min-w-[320px] max-w-[500px] w-1/2 md:w-1/3 lg:w-1/4 flex flex-col opacity-0 justify-center bg-transparent ease-in-out duration-700"
        }
      >
        <div className="md:pl-2 md:mr-2 text-black jostfamily">
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 md:gap-0 text-lg md:text-sm font-light bg-gradient-to-r w-screen md:w-auto h-screen md:h-auto from-lime-400 to-[#b9ff17] pl-6 pr-2 md:pr-0">
            <div className="cursor-pointer inline-block p-[5px] hover:underline">
              <div
                onClick={() => {
                  handleNav("man-tshirts");
                }}
              >
                T-SHIRTS
              </div>
            </div>
            <div className="cursor-pointer inline-block p-[5px] hover:underline">
              <div
                onClick={() => {
                  handleNav("man-jackets");
                }}
              >
                JACKETS
              </div>
            </div>
            <div className="cursor-pointer inline-block p-[5px] hover:underline">
              <div
                onClick={() => {
                  handleNav("man-shoes");
                }}
              >
                SHOES
              </div>
            </div>
            <div className="cursor-pointer inline-block p-[5px] hover:underline">
              <div
                onClick={() => {
                  handleNav("man-accessories");
                }}
              >
                ACCESSORIES
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          login
            ? "absolute top-0 h-screen right-0 z-10   md:min-w-[320px] md:max-w-[500px] w-screen md:w-1/3 lg:w-1/3 flex flex-col opacity-1 justify-center ease-in-out duration-700 md:duration-500 backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)]"
            : "absolute top-0 h-screen right-[-350px] min-w-[320px] max-w-[500px] w-1/2 md:w-1/3 lg:w-1/4 flex flex-col opacity-0 justify-center ease-in-out duration-700                 backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)]"
        }
      >
        <LogIn
          register={register}
          setRegister={setRegister}
          closeLogin={closeLogin}
          email={email}
          setEmail={setEmail}
          pass={pass}
          setPass={setPass}
          confirm={confirm}
          setConfirm={setConfirm}
          name={name}
          setName={setName}
        />
      </div>
    </div>
  );
};

export default Navbar;
