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

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [add, setAdd] = useState([]);
  const [filter, setFilter] = useState([]);
  const [country, setCountry] = useState("");
  const [wait, setWait] = useState(true);
  const [loading,setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
// loading showing
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  },2000);
  return () => clearTimeout(timer);
},[])
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
    loading,
    wait,
    add,
    country,
    setAdd,
    setFilter,
    setCountry,
    setUser,
    setData,
    createUser,
    loginUser,
    logoutUser,
    googlePopup,
    githubPopup,
  };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
