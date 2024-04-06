import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { auth } from "../firebase/firebase.init";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };
   const logOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log(`user in the auth state changed: ${currentUser}`);
         setUser(currentUser);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = { user, createUser, logIn, logOut };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

AuthProvider.propTypes = {
   children: PropTypes.node,
};

export default AuthProvider;
