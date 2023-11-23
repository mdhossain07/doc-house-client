/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      return () => {
        observer();
      };
    });
  }, []);

  const authInfo = { user, loading, createUser, loginUser, logOut, updateUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
