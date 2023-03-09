import { useEffect, useState } from "react"

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firbase.init";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInwithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleSignout = () => {
        signOut(auth)
            .then({})
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    return {
        user,
        handleSignout,
        signInwithGoogle
    };
}

export default useFirebase;