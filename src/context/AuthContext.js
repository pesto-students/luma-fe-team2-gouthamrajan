import React, { createContext, useContext, useEffect, useState } from 'react';
import { Auth } from 'firebase/auth';
import {
  createAuthUserWithEmailAndPassword,
  onAuthStateChangedListener,
} from '../lib/firebase';
import { async } from '@firebase/util';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrrentUser] = useState(null);

  const signup = async (email, password) => {
    return createAuthUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
