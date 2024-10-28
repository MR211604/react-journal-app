import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";
import { User, UserWithoutDisplayName } from "../types/types";

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

  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.message
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

  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const loginWithEmailAndPassword = async ({ email, password }: UserWithoutDisplayName) => {

  try {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const { displayName, photoURL, uid } = result.user
    return {
      ok: true,
      displayName,
      photoURL,
      uid
    }
  } catch (error: any) {
    console.log(error.message)
    return {
      ok: false,
      errorMessage: error.message
    }
  }

}

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
}