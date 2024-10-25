import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";
import { User } from "../types/types";

export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error
    }
  }
}


export const registerUserWithEmailAndPassword = async ({ email, password, displayName }: User) => {
  try {

    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password)

    const { uid, photoURL } = result.user


    await updateProfile(firebaseAuth.currentUser!, {
      displayName
    })

    return {
      ok: true,
      uid, photoURL, email, displayName
    }


  } catch (error) {
    return {
      ok: false,
      errorMEssage: error
    }
  }
}