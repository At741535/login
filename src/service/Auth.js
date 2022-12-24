import { createContext, useState } from "react";

const Auth = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
};
