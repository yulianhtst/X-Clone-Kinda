import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthContextProvider({ children }:any) {
  const [auth, setAuth] = useState();

  const userAuth = (userAuthData: any) => {
    setAuth(userAuthData);
  };

  return (
    <AuthContext.Provider value={{ auth, userAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
