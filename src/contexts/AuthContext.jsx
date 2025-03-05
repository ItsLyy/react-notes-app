import PropTypes from "prop-types";
import { createContext, useLayoutEffect, useMemo, useState } from "react";
import { getUserLogged, putAccessToken } from "../utils/network-data";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, _setToken] = useState(
    localStorage.getItem("ACCESS_TOKEN") || null
  );
  const [user, setUser] = useState(null);

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      putAccessToken(token);
    } else {
      putAccessToken("");
    }
  };

  useLayoutEffect(() => {
    const getUser = async () => {
      try {
        const res = await getUserLogged();
        if (!res.error) {
          setUser(res.data);
        } else {
          setUser(null);
          setToken(null);
        }
      } catch (error) {
        console.log(error);
        setToken(null);
        setUser(null);
      }
    };

    getUser();
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
    }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AuthProvider, AuthContext };
