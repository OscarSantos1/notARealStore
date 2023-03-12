"use strict";
(() => {
var exports = {};
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 3000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/SizeSelector.jsx

const SizeSelector = ({ selected , type , size , handleSelect  })=>{
    const sizes = {
        tshirts: [
            "S",
            "M",
            "L",
            "XL"
        ],
        jackets: [
            "S",
            "M",
            "L",
            "XL"
        ],
        shoes: [
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13"
        ],
        accessories: [
            "M",
            "L"
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex md:flex-col justify-center space-y-0 ${selected && "font-bold"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "hidden md:inline"
            }),
            sizes[type].map((s, index)=>!selected || size === s ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `cursor-pointer px-10 md:px-0 pt-[1px] hover:bg-gray-100 ${selected && "bg-black text-white md:hover:bg-gray-100 hover:bg-gray-700 md:bg-white md:text-black"}`,
                    onClick: ()=>handleSelect(s),
                    children: s
                }, index) : ""),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "hidden md:inline"
            })
        ]
    });
};
/* harmony default export */ const components_SizeSelector = (SizeSelector);

// EXTERNAL MODULE: ./context/ShoppingCartContext.js + 1 modules
var ShoppingCartContext = __webpack_require__(342);
// EXTERNAL MODULE: ./utilities/formatCurrency.js
var formatCurrency = __webpack_require__(139);
;// CONCATENATED MODULE: ./pages/item/[id]/index.js






const item = ({ item  })=>{
    const { increaseItemQuantity  } = (0,ShoppingCartContext/* useShoppingCart */.g)();
    const [size, setSize] = (0,external_react_.useState)();
    const [selected, setSelected] = (0,external_react_.useState)(false);
    const [zoom, setZoom] = (0,external_react_.useState)(false);
    const [zoomedImg, setZoomedImg] = (0,external_react_.useState)();
    const handleAdd = ()=>{
        if (selected) {
            increaseItemQuantity(item._id, item.mainImg, size, item.name);
            setSelected((currVal)=>!currVal);
            setSize("");
        } else {
            alert("Must select size.");
        }
    };
    const handleSelect = (value)=>{
        setSize(value);
        setSelected(!selected);
    };
    const handleZoom = (image)=>{
        setZoomedImg(image);
        setZoom(!zoom);
    };
    const viewerScroll = ()=>{
        const element = document.getElementById("viewer");
        if (element) {
            element.scrollTo(0, 600);
        }
    };
    const handleClickScroll = (section)=>{
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: `${item.name} - ${item.color} | NotARealStore`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "static md:relative h-screen w-screen bg-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "static md:relative flex flex-col md:flex-row md:items-end md:min-h-[550px] h-screen w-screen md:pb-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-1 flex md:items-end md:justify-end md:h-full min-w-max md:pl-2 md:p-0 md:pt-11 md:pr-[16px] lg:pr-[90px]",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "block static md:relative h-screen w-screen md:h-full md:w-auto ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "imageNav",
                                            className: "h-[90%] w-screen md:h-full md:w-auto overflow-auto hide-scroll",
                                            children: item.images.map((image, index)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "cursor-pointer w-screen md:h-full md:w-auto",
                                                    onClick: ()=>handleZoom(image),
                                                    id: `${index}`,
                                                    src: `http://localhost:5001${image}`,
                                                    alt: "/",
                                                    layout: "responsive"
                                                }, index))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden md:flex absolute flex-col space-y-1 top-0 right-[-30px]",
                                            children: item.images.map((image, index)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    onClick: ()=>handleClickScroll(index),
                                                    src: `http://localhost:5001${image}`,
                                                    alt: "/",
                                                    className: "cursor-pointer h-[39px] w-[26px]",
                                                    layout: "responsive"
                                                }, index))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "fixed bottom-0 w-screen px-6 mx-auto md:static bg-white md:flex-[0.7] flex flex-col md:justify-end font-light",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col-reverse gap-2 justify-start md:gap-4 md:min-w-[300px] md:h-1/2 lg:pr-14 mt-3 md:mt-14",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: handleAdd,
                                            className: "bg-black text-white mx-[-24px] md:mx-0 text-sm pt-[10px] pb-[8px] md:pt-3 md:pb-2 mt-10 md:mt-0",
                                            children: "ADD TO CART"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_SizeSelector, {
                                            selected: selected,
                                            type: item.type,
                                            size: size,
                                            handleSelect: handleSelect
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: (0,formatCurrency/* default */.Z)(item.price / 100)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            onClick: handleClickScroll,
                                            children: item.color
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "(A BRIEF DESCRIPTION OF YOUR PRODUCT WOULD GO HERE)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "",
                                            children: item.name
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    zoom && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onLoad: viewerScroll,
                        id: "viewer",
                        className: "absolute z-50 top-0 left-0 h-screen w-screen bg-white overflow-scroll overscroll-contain",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            onClick: ()=>handleZoom(""),
                            src: `http://localhost:5001${zoomedImg}`,
                            alt: "/",
                            className: "cursor-zoom-out w-full",
                            layout: "responsive"
                        })
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const itemId = context.params.id.split("-p");
    const id = itemId[itemId.length - 1];
    const responce = await fetch(`http://localhost:5001/api/item/${id}`);
    const item = await responce.json();
    return {
        props: {
            item
        }
    };
};
/* harmony default export */ const _id_ = (item);


/***/ }),

/***/ 139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
});
const formatCurrency = (number)=>{
    return CURRENCY_FORMATTER.format(number);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatCurrency);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [342], () => (__webpack_exec__(3000)));
module.exports = __webpack_exports__;

})();