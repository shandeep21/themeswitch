import { useEffect, useState } from "react";

export default function UseLocalStorage(key, defaultValue) {
  const [getValue, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(getValue));
  }, [key, getValue]);
  return [getValue, setValue];
}
