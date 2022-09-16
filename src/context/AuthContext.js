import React, { createContext, useContext, useEffect, useState } from 'react';
import useSessionStorage from '../hooks/useSessionStorage';
import {
  createAuthUserWithEmailAndPassword,
  onAuthStateChangedListener,
  loginWithEmailAndPassword,
  signOutUser,
  sendEmailForPasswordReset,
} from '../lib/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isExpert, setIsExpert] = useSessionStorage('isExpert', false);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    return createAuthUserWithEmailAndPassword(email, password);
  };

  const login = async (email, password) => {
    return loginWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    return signOutUser();
  };

  const resetPassword = async (email) => {
    return sendEmailForPasswordReset(email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isExpert,
    setIsExpert,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
