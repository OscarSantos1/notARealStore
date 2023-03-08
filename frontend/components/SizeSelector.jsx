const SizeSelector = ({ selected, type, size, handleSelect }) => {
  const sizes = {
    tshirts: ["S", "M", "L", "XL"],
    jackets: ["S", "M", "L", "XL"],
    shoes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    accessories: ["M", "L"],
  };

  return (
    <div
      className={`flex md:flex-col justify-center space-y-0 ${
        selected && "font-bold"
      }`}
    >
      <hr className="hidden md:inline" />

      {sizes[type].map((s, index) =>
        !selected || size === s ? (
          <div
            key={index}
            className={`cursor-pointer px-10 md:px-0 pt-[1px] hover:bg-gray-100 ${
              selected &&
              "bg-black text-white md:hover:bg-gray-100 hover:bg-gray-700 md:bg-white md:text-black"
            }`}
            onClick={() => handleSelect(s)}
          >
            {s}
          </div>
        ) : (
          ""
        )
      )}
      <hr className="hidden md:inline" />
    </div>
  );
};

export default SizeSelector;
