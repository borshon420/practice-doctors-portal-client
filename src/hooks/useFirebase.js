import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    
  
    const handleRegistration = (email, password) => {
      
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          
          
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  
    
  
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
      });
      return () => unsubscribed;
    }, []);
    return {
      user,
      error,
      handleRegistration,
    };
  };
  
  export default useFirebase;