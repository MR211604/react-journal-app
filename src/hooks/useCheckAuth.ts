import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";
import { useAppSelector } from "./useAppSelector";
import { useAppDispatch } from "./useAppDispatch";

export const useCheckAuth = () => {
  const { status } = useAppSelector((state) => state.auth)

  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return dispatch(logout('user not found'))
      const { uid, email, displayName, photoURL } = user
      dispatch(login({ uid, email, displayName, photoURL }))
      
      //Luego de haber hecho el login, se traen todas las todas del usuario autenticado
      dispatch(startLoadingNotes());
    })
  }, [])

  return {
    status
  }
  
}