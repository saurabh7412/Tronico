import { createContext, useEffect, useState } from "react";

let username = (localStorage.getItem('username'));
console.log(username);

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(()=>{
    if(username !== null){
      setIsAuth(true)
    }
  },[])

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
