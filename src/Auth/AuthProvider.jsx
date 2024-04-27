import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../services/firebase/firebase";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [filter,setFilter] = useState([]);
  const [country,setCountry] = useState('');
  const [wait, setWait] = useState(true);
  const [modal, setModal] = useState(false);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // firebase all functions
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (newUser) => {
      setWait(false);
      setUser(newUser);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);
  const createUser = (email, password) => {
    setWait(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setWait(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    setWait(true);
    return signOut(auth);
  };
  const googlePopup = () => {
    setWait(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubPopup = () => {
    setWait(true);
    return signInWithPopup(auth, githubProvider);
  };
  const authValues = {
    user,
    filter,
    data,
    wait,
    country,
    modal,
    setFilter,
    setCountry,
    setUser,
    setData,
    createUser,
    loginUser,
    logoutUser,
    googlePopup,
    githubPopup,
    setModal,
  };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
