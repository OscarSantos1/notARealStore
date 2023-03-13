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

  const handleAdd = () => {
    if (selected) {
      increaseItemQuantity(item._id, item.mainImg, size, item.name);
      setSelected((currVal) => !currVal);
      setSize("");
    } else {
      alert("Must select size.");
    }
  };

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
        <title>{`${item.name} - ${item.color} | NotARealStore`}</title>
      </Head>
      <div className="static md:relative h-screen w-screen bg-white">
        <div className="static md:relative flex flex-col md:flex-row md:items-end md:min-h-[550px] h-screen w-screen md:pb-8">
          <div className="flex-1 flex md:items-end md:justify-end md:h-full min-w-max md:pl-2 md:p-0 md:pt-11 md:pr-[16px] lg:pr-[90px]">
            <div className="block static md:relative h-screen w-screen md:h-full md:w-auto ">
              <div
                id="imageNav"
                className="h-[90%] w-screen md:h-full md:w-auto overflow-auto hide-scroll"
              >
                {item.images.map((image, index) => (
                  <img
                    className="cursor-pointer w-screen md:h-full md:w-auto"
                    onClick={() => handleZoom(image)}
                    id={`${index}`}
                    key={index}
                    src={`${image}`}
                    alt="/"
                    layout="responsive"
                  />
                ))}
              </div>
              <div className="hidden md:flex absolute flex-col space-y-1 top-0 right-[-30px]">
                {item.images.map((image, index) => (
                  <img
                    onClick={() => handleClickScroll(index)}
                    key={index}
                    src={`${image}`}
                    alt="/"
                    className="cursor-pointer h-[39px] w-[26px]"
                    layout="responsive"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 w-screen px-6 mx-auto md:static bg-white md:flex-[0.7] flex flex-col md:justify-end font-light">
            <div className="flex flex-col-reverse gap-2 justify-start md:gap-4 md:min-w-[300px] md:h-1/2 lg:pr-14 mt-3 md:mt-14">
              <button
                onClick={handleAdd}
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
              <p>(A BRIEF DESCRIPTION OF YOUR PRODUCT WOULD GO HERE)</p>
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
              src={`${zoomedImg}`}
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
  const domain =
    process.env.NODE_ENV == "development"
      ? "http://localhost:5001/"
      : "https://notarealstore.herokuapp.com/";
  const responce = await fetch(`${domain}api/item/${id}`);
  const item = await responce.json();

  return {
    props: {
      item,
    },
  };
};

export default item;
