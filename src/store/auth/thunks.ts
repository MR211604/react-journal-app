import { signInWithGoogle } from "../../firebase/providers";
import { AppDispatch } from "../store";
import { checkingCredentials } from "./authSlice";

interface AuthData {
  email: string;
  password: string;
}

export const checkingAuthentication = ({ email, password }: AuthData) => {
  return async (dispatch: AppDispatch) => {
    console.log({ email, password });
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
  return async ( dispatch: AppDispatch ) => {
    dispatch(checkingCredentials());  
    signInWithGoogle();
  }
}