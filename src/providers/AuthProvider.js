import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Create a context for the authentication state
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user data in cookies on initial render
    const userData = Cookies.get("name");
    if (userData) {
      setUser(userData);
    }
  }, []);

  const login = (userCredentials) => {
    // Logic to authenticate user
    setUser(userCredentials);
    Cookies.set("name", JSON.stringify(userCredentials));
  };

  const logout = () => {
    // Logic to log out user
    setUser(null);
    Cookies.remove("name");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);
