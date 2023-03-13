import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
  const [token, setToken] = useLocalStorage("jwt-token", "");
  const [userName, setUserName] = useLocalStorage("user-name", "");
  const [lastAdded, setLastAdded] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [fastClose, setFastClose] = useState(false);
  const cartQuantity = cartItems?.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const [timeOut, setTimeOut] = useState();

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseItemQuantity = (id, image, size, name) => {
    setCartItems((currItems) => {
      if (
        currItems?.find((item) => item.id === id && item.size === size) == null
      ) {
        return currItems
          ? [...currItems, { id, quantity: 1, size }]
          : [{ id, quantity: 1, size }];
      } else {
        return currItems.map((item) => {
          if (item.id === id && item.size === size) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    setLastAdded({ name, image, size });
    setFastClose(false);
    setIsOpen(true);
    setTimeOut(setTimeout(() => setIsOpen(false), 2500));
  };
  const decreaseItemQuantity = (id, size) => {
    setCartItems((currItems) => {
      if (
        currItems.find((item) => item.id === id && item.size === size)
          ?.quantity === 1
      ) {
        return currItems.filter((item) => item.id !== id || item.size !== size);
      } else {
        return currItems.map((item) => {
          if (item.id === id && item.size === size) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id, size) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id || item.size !== size);
    });
  };
  const stopClose = () => {
    setTimeOut((currTimeOut) => clearTimeout(currTimeOut));
  };
  const startClose = () => {
    setTimeOut(setTimeout(() => setIsOpen(false), 2500));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        setCartItems,
        cartQuantity,
        isOpen,
        lastAdded,
        timeOut,
        stopClose,
        startClose,
        fastClose,
        setFastClose,
        token,
        setToken,
        userName,
        setUserName,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
