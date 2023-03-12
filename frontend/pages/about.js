import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>About - NotARealStore</title>
      </Head>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-6xl">notARealStore</h2>
        <p className="text-center text-lg font-light w-[90%] leading-4 md:leading-normal text-[14px] md:text-[1.125rem] md:w-[70%] lg:w-1/2 lg:1/3 mt-4">
          NotARealStore is a prototype for a fully functional, fully responsive
          online clothing store waiting to become the new home of your clothing
          line. The store can handle a constantly increasing inventory, credit
          card payments, sending purchase confirmation emails and user
          authorization and authentication.
        </p>
        <p className="text-center text-lg w-[90%] leading-4 md:leading-normal text-[1rem] md:text-[1.125rem] md:w-[70%] lg:w-1/2 lg:1/3 mt-4">
          If you're looking for a place where people can find your products and
          explore them through a comprehensive and modern user interphase,
          contact us at{" "}
          <span className="underline">notarealstore@outlook.com</span>
        </p>
      </div>
    </>
  );
};

export default about;
