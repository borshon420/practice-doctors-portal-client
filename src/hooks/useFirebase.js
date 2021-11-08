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
  const [admin, setAdmin] = useState(false);
  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
      setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        const newUser = {email, displayName: name};
        setUser(newUser);
        // save user to the database
        saveUser(email, name, 'POST');
        // send name to firebase after creation
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
        saveUser(user.email, user.displayName, 'PUT')
        setError("");
        const destination = location?.state?.from || '/'
      history.replace(destination);
        
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

  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])

  const logOut = () => {
    signOut(auth)
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

  const saveUser = (email, displayName, method) =>{
    const user = {email, displayName}
    fetch('http://localhost:5000/users',{
      method: method,
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()
  }


  return {
    user,
    admin,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut,
    error,
    isLoading,

  };
};

export default useFirebase;
