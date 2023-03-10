import React, { useEffect } from "react";
import ItemCard from "./ItemCard";

const ItemLayout = ({ items, title, desc }) => {
  useEffect(() => {});
  return (
    <div className="w-screen z-10 text-center py-24 bg-white">
      <div className="flex flex-col justify-center items-center font-light bg-white  p-1">
        <div className="text-2xl">{title}</div>
        <div className="text-xs md:text-sm max-w-md">{desc}</div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-8 md:gap-5 p-5">
        {items?.map((item) => (
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
  );
};

export default ItemLayout;
