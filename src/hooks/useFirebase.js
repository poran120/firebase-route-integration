import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";

const useFirebase = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  const signInGoogle = () => {
    // console.log("Sign in soon");
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };

  const googleSignOut = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  //   return [user, setUser];
  return { user, googleSignOut, signInGoogle };
};
export default useFirebase;
