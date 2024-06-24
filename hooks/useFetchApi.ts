import { useEffect } from "react";

const useFetchApi = (path: string) => {
  useEffect(() => {
    (async () => {
      fetch(`http://localhost:3000/${path}/`);
    })();
  }, [path]);
};
