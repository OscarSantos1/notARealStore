(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_FloatingCart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: ./context/ShoppingCartContext.js + 1 modules
var ShoppingCartContext = __webpack_require__(342);
;// CONCATENATED MODULE: ./components/FloatingCart.jsx






const FloatingCart = ()=>{
    const { openCart , closeCart , cartQuantity , isOpen , lastAdded , setFastClose , stopClose  } = (0,ShoppingCartContext/* useShoppingCart */.g)();
    (0,external_react_.useEffect)(()=>{
        const element = document.getElementById("floating-cart");
        if (element) {
            element.addEventListener("mouseover", ()=>{
                console.log("in");
                stopClose();
            });
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " relative w-screen flex justify-center ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/cart",
                id: "floating-cart",
                className: `fixed flex flex-col justify-center items-center bottom-10 text-black border-[#ff1249] pb-2 pt-1 ${isOpen ? "z-50 w-56 h-96 backdrop-blur-[10px] bg-[rgba(255,16,80,0.2)] rounded-[3rem] px-6 pt-0 bounce-in ease-in-out duration-500" : "z-10 w-20 h-10 bg-gradient-to-r from-[#ff1249] to-[#ff0364] rounded-full cursor-pointer"} ${!isOpen ? " bounce-out ease-in-out duration-500" : ""} overflow-clip `,
                children: [
                    isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col text-xs font-light fade-in",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    closeCart();
                                },
                                className: "flex z-20 self-center justify-center bg-[#ff1064] text-white w-14 rounded-full my-1 cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(io_.IoIosArrowDown, {
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "rounded-3xl overflow-hidden h-60",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `http://localhost:5001${lastAdded.image}`
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-normal mt-3",
                                children: lastAdded.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "overflow-hidden mt-1",
                                children: [
                                    "SIZE ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: lastAdded.size
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-normal",
                                        children: "ADDED"
                                    }),
                                    " TO YOUR CART"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: ()=>closeCart(),
                        className: "h-full relative font-light flex flex-col justify-center items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `absolute flex justify-center ${isOpen ? "bg-[#ff1064] bottom-[10px] p-2 w-28 " : "bg-transparent bottom-[2px] p-0"} rounded-full ease-in-out duration-1000 cursor-pointer`,
                                children: !isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillBagFill, {
                                    size: 24
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `text-[10px] text-center font-normal fade-in`,
                                    children: "GO TO CART"
                                })
                            }),
                            cartQuantity > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>!isOpen ? openCart() : closeCart(),
                                className: `absolute text-[#ff1064] ${isOpen ? "bottom-[15px]" : "bottom-[-2px]"} ease-in-out duration-1000 cursor-pointer`,
                                children: !isOpen ? cartQuantity : ""
                            })
                        ]
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>{
                    closeCart();
                    setFastClose(true);
                    stopClose();
                },
                className: "absolute h-screen bottom-0 z-30 bg-white/40 w-screen"
            })
        ]
    });
};
/* harmony default export */ const components_FloatingCart = (FloatingCart);


/***/ }),

/***/ 2915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const LogIn = ({ register , setRegister , closeLogin , email , setEmail , pass , setPass , confirm , setConfirm , name , setName  })=>{
    const APP_API_URL = "http://localhost:5001";
    const { setToken , setUserName  } = (0,_context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_3__/* .useShoppingCart */ .g)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        sessionStorage.removeItem("doMeToken");
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let payload;
        let response;
        let msg;
        if (email.length === 0) return alert("Must provide username");
        if (pass.length === 0) return alert("Must provide password");
        if (register && confirm.length === 0) return alert("Must confirm password");
        if (register && pass !== confirm) return alert("Password and confirmation must match");
        if (register) {
            payload = {
                name: name,
                email: email,
                password: pass
            };
            response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${APP_API_URL}/users`, payload);
            if (response.data.msg === "taken") msg = "Username already taken";
            if (response.data.msg === "success") msg = "Success";
        } else {
            payload = {
                email: email,
                password: pass
            };
            response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${APP_API_URL}/users/login`, payload);
            if (response.data.msg === "invalid") msg = "Invalid username and/or password";
            if (response.data.msg === "Success!") msg = "Welcome!";
        }
        console.log(response.data.token);
        setToken(response.data.token);
        setUserName(response.data.name);
        setName("");
        setEmail("");
        setPass("");
        setConfirm("");
        alert(msg);
        closeLogin();
        return;
    };
    const handleRegister = ()=>{
        setRegister(!register);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex flex-col justify-around items-center h-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: closeLogin,
                className: "absolute top-2 right-2 text-center p-2 bg-black pl-2 text-white jostfamily",
                children: "x"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col space-y-6 text-center w-60 font-light jostfamily ease-in duration-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-3xl font-thin text-black",
                        children: register ? "REGISTER" : "LOG IN"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "flex flex-col space-y-5",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "border p-2 w-full bg-transparent",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                type: "text",
                                placeholder: "e-mail",
                                id: "email",
                                name: "email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: ` ${register ? "h-10" : "hidden"} border p-2 w-full bg-transparent ease-in duration-500 overflow-hidden`,
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                type: "text",
                                placeholder: "name",
                                id: "name",
                                name: "name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "border p-2 w-full bg-transparent",
                                value: pass,
                                onChange: (e)=>setPass(e.target.value),
                                type: "password",
                                placeholder: "password",
                                id: "password",
                                name: "password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: ` ${register ? "h-10" : "hidden"} border p-2 w-full bg-transparent ease-in duration-500 overflow-hidden`,
                                value: confirm,
                                onChange: (e)=>setConfirm(e.target.value),
                                type: "password",
                                placeholder: "confirm password",
                                id: "confirm",
                                name: "confirm"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "border border-black",
                                type: "submit",
                                children: register ? "Create account" : "Log In"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: "",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                register ? "Already have an account?" : "Don't have an account yet?",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: handleRegister,
                                    className: "underline cursor-pointer",
                                    children: register ? "Log in" : "Register"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LogIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2915);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LogIn__WEBPACK_IMPORTED_MODULE_3__]);
_LogIn__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Navbar = ()=>{
    const { token , userName  } = (0,_context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__/* .useShoppingCart */ .g)();
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [register, setRegister] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [pass, setPass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [confirm, setConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const handleNav = (c)=>{
        router.push(`/catalogue/${c}`);
        setWidth(window.innerWidth);
        setSelected(c);
        setTimeout(()=>{
            setNav(!nav);
        }, 210);
        setTimeout(()=>{
            setSelected("");
        }, 400);
    };
    const handleLogin = ()=>{
        setLogin(!login);
        setRegister(false);
        setEmail("");
        setPass("");
        setConfirm("");
    };
    const closeLogin = ()=>{
        setLogin(!login);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `fixed left-0 right-0 top-0 z-20 text-black`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative m-auto flex justify-between items-center p-2 pr-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "absolute flex items-stretch top-[43px] ease-in duration-300 bg-gradient-to-r from-[#ff1064] to-[#ff1741] pb-2 md:pb-4 pl-4 md:pl-6",
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "z-40 ease-in duration-50 text-lg md:text-4xl",
                                children: "NOTAREALSTORE"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: nav ? "z-50 ease-in-out duration-300" : "z-10 ease-in-out duration-300",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosMenu, {
                            size: 25,
                            color: "black",
                            className: "cursor-pointer",
                            onClick: ()=>setNav(!nav)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex space-x-4 font-light text-md text-black",
                        children: [
                            !token ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleLogin,
                                className: "border border-black pt-1 px-2 cursor-pointer",
                                children: "LOG IN"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/user",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: `border border-black pt-1 px-2 cursor-pointer`,
                                    children: userName.toUpperCase()
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/about",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "pt-1 cursor-pointer",
                                    children: "ABOUT"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: nav ? "z-40 absolute top-0 md:top-[8px] left-0 min-w-[320px] md:max-w-[500px] md:w-1/3 lg:w-1/3 flex flex-col opacity-1 justify-center bg-transparent ease-in-out duration-700 md:duration-500" : "absolute top-0 md:top-[8px] left-[-100%]  min-w-[320px] max-w-[500px] w-1/2 md:w-1/3 lg:w-1/4 flex flex-col opacity-0 justify-center bg-transparent ease-in-out duration-700",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:pl-2 md:mr-2 text-black jostfamily",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 md:gap-0 text-lg md:text-sm font-light w-screen md:w-auto h-screen md:h-auto bg-[#F6F6F6] md:bg-gradient-to-r md:from-lime-400 md:to-[#b9ff17] pl-6 pr-2 md:pr-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: selected == "man-tshirts" && width <= 767 ? "bounce-click cursor-pointer inline-block p-[5px] hover:underline" : "cursor-pointer inline-block p-[5px] hover:underline",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        handleNav("man-tshirts");
                                    },
                                    children: "T-SHIRTS"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: selected == "man-jackets" && width <= 767 ? "bounce-click cursor-pointer inline-block p-[5px] hover:underline" : "cursor-pointer inline-block p-[5px] hover:underline",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        handleNav("man-jackets");
                                    },
                                    children: "JACKETS"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: selected == "man-shoes" && width <= 767 ? "bounce-click cursor-pointer inline-block p-[5px] hover:underline" : "cursor-pointer inline-block p-[5px] hover:underline",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        handleNav("man-shoes");
                                    },
                                    children: "SHOES"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: selected == "man-accessories" && width <= 767 ? "bounce-click cursor-pointer inline-block p-[5px] hover:underline" : "cursor-pointer inline-block p-[5px] hover:underline",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        handleNav("man-accessories");
                                    },
                                    children: "ACCESSORIES"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: login ? "absolute top-0 h-screen right-0 z-10   md:min-w-[320px] md:max-w-[500px] w-screen md:w-1/3 lg:w-1/3 flex flex-col opacity-1 justify-center ease-in-out duration-700 md:duration-500 backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)]" : "absolute top-0 h-screen right-[-350px] min-w-[320px] max-w-[500px] w-1/2 md:w-1/3 lg:w-1/4 flex flex-col opacity-0 justify-center ease-in-out duration-700                 backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogIn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    register: register,
                    setRegister: setRegister,
                    closeLogin: closeLogin,
                    email: email,
                    setEmail: setEmail,
                    pass: pass,
                    setPass: setPass,
                    confirm: confirm,
                    setConfirm: setConfirm,
                    name: name,
                    setName: setName
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2787);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FloatingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3530);
/* harmony import */ var _context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_2__]);
_components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function App({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "shortcut icon",
                        href: "/images/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/images/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/images/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/images/favicon-16x16.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "flex flex-col items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__/* .ShoppingCartProvider */ .p, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        router.asPath !== "/cart" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FloatingCart__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,342], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();