import { useState } from "react";

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setvalue] = useState(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage?.getItem(key);

      return storedData ? JSON.parse(storedData) : defaultValue;
    }
  });
  const setLocalStorageValue = (newValue: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(newValue));
      setvalue(newValue);
    }
  };

  return [value, setLocalStorageValue];
};
