import { } from "react";
import { AuthContext } from "./AuthContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type User = {
  _id: string;
  name: string;
  email: string;
}
type AuthData = {
  message: string;
  token: string;
}
type Token = AuthData & { user: User }

export function AuthContextProvider({ children }: any) {
  const [auth, setAuth] = useLocalStorage('auth', {});

  const userAuth = (userAuthData: Token) => {
    setAuth(userAuthData);
  };

  return (
    <AuthContext.Provider value={{ auth, userAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
