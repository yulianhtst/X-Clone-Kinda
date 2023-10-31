import { API } from "@/Constants";
import { useEffect } from "react";

const useFetchApi = (path: string) => {
  useEffect(() => {
    (async () => {
      fetch(`${API}/${path}/`);
    })();
  }, [path]);
};
