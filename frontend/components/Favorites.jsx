import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const Hero = () => {
  const [cataloge, setCataloge] = useState({});
  useEffect(() => {
    const getFav = async () => {
      const domain =
        process.env.NODE_ENV == "development"
          ? "http://localhost:5001/"
          : "https://notarealstore.herokuapp.com/";
      const responce = await fetch(`${domain}api/favourites`);
      console.log(responce);
      const cat = await responce?.json();
      console.log(cat);
      setCataloge(cat);
    };
    getFav();
  }, []);
  return (
    <div className="w-screen mb-12 bg-white">
      <div>
        <div className="pt-24">
          <div className="flex flex-col justify-center items-center font-light bg-gradient-to-r p-1">
            <div className="text-2xl">{"Favorites ❤️‍🔥"}</div>
            <div className="text-sm max-w-md text-center">
              (FAVORITE ITEMS ARE STATISTICALLY DETERMINED BASED ON HOW MANY
              TIMES AN ITEM IS PURCHASED OR IT'S PAGE IS VISITED).
              <span className="font-normal">
                &nbsp; NOTAREALSTORE IS A PROTOTIPE FOR A FULLY FUNCTIONAL
                ONLINE CLOTHING STORE THAT'S CURRENTLY{" "}
                <span className="text-red-600">ON SALE</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 gap-y-8 md:gap-5 p-5">
            {cataloge?.items?.map((item) => (
              <ItemCard
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.mainImg}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
