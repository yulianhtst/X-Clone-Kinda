import { useEffect } from "react";

const useFetchApi = (path: string) => {
  useEffect(() => {
    (async () => {
      fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/${path}/`);
    })();
  }, [path]);
};
