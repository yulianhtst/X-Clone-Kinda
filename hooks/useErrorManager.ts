import { useState } from "react";



export const useErrorManager = () => {
  const [error, setError] = useState<any>({});

  const setCustomError = (
    errorKey: string,
    message: string,
    err: Error | null = null
  ) => {
    setError((prevState: any) => {
      console.log(prevState, "prevstate");
      console.log({ errorKey, message }, "prevstate");
      return {
        ...prevState,
        [errorKey]: message,
      };
    });
  };

  ///Тука Error е празна
  console.log(error, "inside hook");

  return {
    error,
    setCustomError,
  };
};
