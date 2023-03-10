import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const jsonValue = localStorage.getItem(key);
    setValue(
      typeof jsonValue == "undefined" ? initialValue : JSON.parse(jsonValue)
    );
  }, [key]);

  useEffect(() => {
    setValue((currValue) => {
      localStorage.setItem(key, JSON.stringify(currValue));
      return currValue;
    });
  }, [key, value]);

  return [value, setValue];
}
