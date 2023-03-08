import Head from "next/head";
import { useState } from "react";
import SizeSelector from "../../../components/SizeSelector";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import formatCurrency from "../../../utilities/formatCurrency";

const item = ({ item }) => {
  const { increaseItemQuantity } = useShoppingCart();
  const [size, setSize] = useState();
  const [selected, setSelected] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zoomedImg, setZoomedImg] = useState();

  const handleSelect = (value) => {
    setSize(value);
    setSelected(!selected);
  };

  const handleZoom = (image) => {
    setZoomedImg(image);
    setZoom(!zoom);
  };

  const viewerScroll = () => {
    const element = document.getElementById("viewer");
    if (element) {
      element.scrollTo(0, 600);
    }
  };

  const handleClickScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>{`${item.name} - ${item.color} | Damn Shop`}</title>
      </Head>
      <div className="static md:relative h-screen w-screen bg-white">
        <div className="static md:relative flex flex-col md:flex-row h-screen w-screen">
          <div className="hidden md:flex flex-[0.5]" />
          <div className="flex-1 md:h-full md:p-5 md:pt-11 md:pr-[60px]">
            <div className="static md:relative h-screen w-screen md:h-[675px] md:w-[450px]">
              <div
                id="imageNav"
                className="h-[90%] w-screen md:h-[675px] md:w-[450px] overflow-auto hide-scroll"
              >
                {item.images.map((image, index) => (
                  <img
                    onClick={() => handleZoom(image)}
                    id={`${index}`}
                    key={index}
                    src={`http://localhost:5001${image}`}
                    alt="/"
                    className="cursor-pointer w-screen md:h-[675px] md:w-[450px]"
                    layout="responsive"
                  />
                ))}
              </div>
              <div className="hidden md:flex absolute flex-col space-y-1 top-0 right-[-30px]">
                {item.images.map((image, index) => (
                  <img
                    onClick={() => handleClickScroll(index)}
                    key={index}
                    src={`http://localhost:5001${image}`}
                    alt="/"
                    className="cursor-pointer h-[39px] w-[26px]"
                    layout="responsive"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 w-screen px-6 mx-auto md:static bg-white md:flex-[0.7] flex flex-col md:justify-end font-light">
            <div className="flex flex-col-reverse gap-2 justify-start md:gap-4 md:min-w-[300px] md:h-1/2 md:pr-14 mt-3 md:mt-14 md:mb-11">
              <button
                onClick={() =>
                  selected
                    ? increaseItemQuantity(
                        item._id,
                        item.mainImg,
                        size,
                        item.name
                      )
                    : alert("Must select size.")
                }
                className="bg-black text-white mx-[-24px] md:mx-0 text-sm pt-[10px] pb-[8px] md:pt-3 md:pb-2 mt-10 md:mt-0"
              >
                ADD TO CART
              </button>
              <SizeSelector
                selected={selected}
                type={item.type}
                size={size}
                handleSelect={handleSelect}
              />
              <p>{formatCurrency(item.price / 100)}</p>
              <p onClick={handleClickScroll}>{item.color}</p>
              <p>Long sleeve round neck sweater. Rib trim.</p>
              <h3 className="">{item.name}</h3>
            </div>
          </div>
        </div>
        {zoom && (
          <div
            onLoad={viewerScroll}
            id="viewer"
            className="absolute z-50 top-0 left-0 h-screen w-screen bg-white overflow-scroll overscroll-contain"
          >
            <img
              onClick={() => handleZoom("")}
              src={`http://localhost:5001${zoomedImg}`}
              alt="/"
              className="cursor-zoom-out w-full"
              layout="responsive"
            />
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const itemId = context.params.id.split("-p");
  const id = itemId[itemId.length - 1];

  const responce = await fetch(`http://localhost:5001/api/item/${id}`);
  const item = await responce.json();

  return {
    props: {
      item,
    },
  };
};

export default item;
