import { createContext, useState } from "react";
import AuthService from "../services/AuthService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // Mock login function
  const login = async (username, password) => {
    try {
      const response = await AuthService.login(username, password);
      console.log(response)
      if (response.access_token) {
        setIsAuthenticated(true);
        console.log(isAuthenticated);
      }
      return response;
      // setIsAuthenticated(true);
      // return await AuthService.login(username, password);
    } catch (error) {
      setIsAuthenticated(false);
      return await AuthService.login(username, password);
    }
  };

  const logout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
