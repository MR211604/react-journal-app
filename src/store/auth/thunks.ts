import { registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers";
import { UserWithoutDisplayName, User } from "../../types/types";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ({ email, password }: UserWithoutDisplayName) => {
  return async (dispatch: AppDispatch) => {
    console.log({ email, password });
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result?.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result))
  }
}

export const startCreateUserWithEmailAndPassword = ({  email, password, displayName }: User) => {
  return async (dispatch: AppDispatch) => {
  
    dispatch(checkingCredentials()); // Cambiando el estado a 'checking'
    
    const { ok, uid, photoURL, errorMEssage } = await registerUserWithEmailAndPassword({ email, password, displayName })

    if(!ok) return dispatch(logout(errorMEssage));
    
    dispatch(login({ email, displayName, photoURL, uid }))

  }
}