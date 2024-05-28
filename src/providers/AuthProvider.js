import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Create a context for the authentication state
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check for user data in cookies on initial render
    const userName = Cookies.get("name");
    const userId = Cookies.get("user_id");
    if (userName) {
      setUserName(userName);
    }
    if (userId) {
      setUserId(userId);
    }
  }, []);

  const login = (userCredentials) => {
    // Logic to authenticate user
    setUserName(userCredentials);
    Cookies.set("name", JSON.stringify(userCredentials));
  };

  const logout = () => {
    // Logic to log out user
    setUserName(null);
    Cookies.remove("name");
  };

  return (
    <AuthContext.Provider value={{ userName, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);
