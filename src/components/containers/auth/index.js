import { createContext, useContext, useEffect, useState } from "react";

import LoadingScreen from "../loading-screen";
import cookieUtils from "utils/local-utils";
import { LOCAL_STORAGE_KEYS } from "constants/app-constants";

export const AuthContext = createContext(null);

const Auth = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const saveLogedAccount = (account) => {
    setAccount(account);
    setIsLogin(true);

    cookieUtils.set(LOCAL_STORAGE_KEYS.ACCOUNT, JSON.stringify(account));
  };

  const registerAccount = (account) => {
    setAccount(account);
  }

  const confirmAccount = () => {
    setIsLogin(true);
    cookieUtils.set(LOCAL_STORAGE_KEYS.ACCOUNT, JSON.stringify(account));
  };

  useEffect(() => {
    const account = cookieUtils.get(LOCAL_STORAGE_KEYS.ACCOUNT);

    if (account) {
      setIsLogin(true);
      setAccount(JSON.parse(account));
    } else {
      setAccount(null);
      setIsLogin(false);
    }

  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, account, saveLogedAccount, registerAccount, confirmAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;

export const useAuth = () => useContext(AuthContext);
