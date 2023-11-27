import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage?.getItem(key);
      return storedData ? JSON.parse(storedData) : defaultValue;
    }
  });

  const setLocalStorageValue = (newValue: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    }
  };

  // Log the updated value when it changes
  useEffect(() => {
    console.log(value, "Inside useLocalStorage");
  }, [value]);

  return [value, setLocalStorageValue];
};
