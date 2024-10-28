import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers";
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
    if (!result?.ok) return dispatch(logout({ errorMessage: result.errorMessage }));
    dispatch(login(result))
  }
}

export const startCreateUserWithEmailAndPassword = ({ email, password, displayName }: User) => {
  return async (dispatch: AppDispatch) => {

    console.log('email, password, displayname', email, password, displayName)

    dispatch(checkingCredentials()); // Cambiando el estado a 'checking'

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword({ email, password, displayName })

    if (!ok) return dispatch(logout({ errorMessage: errorMessage }));

    dispatch(login({ email, displayName, photoURL, uid }))

  }
}

export const startLoginWithEmailAndPassword = ({ email, password }: UserWithoutDisplayName) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailAndPassword({ email, password });

    if (!ok) return dispatch(logout({ errorMessage: errorMessage }))

    dispatch(login({ email, displayName, photoURL, uid }))
  }
}

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    await logoutFirebase();
    dispatch(logout('Sesion del usuario cerrada con exito'))
  }
}