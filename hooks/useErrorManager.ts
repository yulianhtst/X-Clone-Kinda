import { useState } from "react";

export const useErrorManager = () => {
  const [error, setError] = useState<any>({});

  const setCustomError = (
    errorKey: string,
    message: string | null = null,
    err: Error | null = null
  ) => {
    if (err instanceof Error || err === null) {
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
