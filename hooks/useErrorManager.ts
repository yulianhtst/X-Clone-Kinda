import { useState } from "react";

export const useErrorManager = () => {
  const [error, setError] = useState<any>({});

  const setCustomError = (
    errorKey: string,
    message: string,
    err: Error | null = null
  ) => {
    if (err instanceof Error) {
      setError((prevState: any) => {
        return {
          ...prevState,
          [errorKey]: message,
        };
      });
    }
  };

  return {
    error,
    setCustomError,
  };
};
