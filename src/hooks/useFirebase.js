import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
      setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        const newUser = {email, displayName: name};
        setUser(newUser);
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            
          });
          history.replace('/')
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=> setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
      setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/'
      history.replace(destination);
      setError('')
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(()=> setIsLoading(false));
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false);
      });
      return ()=> unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth)
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }


  return {
    user,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut,
    error,
    isLoading,

  };
};

export default useFirebase;
