import { AuthContext } from "./AuthContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function AuthContextProvider({ children }: any) {
  const [auth, setAuth] = useLocalStorage('auth',{});

  const userAuth = (userAuthData: any) => {
    setAuth(userAuthData);
  };

  return (
    <AuthContext.Provider value={{ auth, userAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
