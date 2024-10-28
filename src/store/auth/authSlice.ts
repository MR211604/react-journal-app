import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
  status: 'not-authenticated' | 'checking' | 'authenticated';
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: unknown | null;
}

const initialState: InitialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated'
      state.uid = payload.uid
      state.email = payload.email
      state.displayName = payload.displayName
      state.photoURL = payload.photoURL
      state.errorMessage = null
    },

    logout: (state, { payload }) => {
      console.log({ payload });
      state.status = 'not-authenticated'
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = payload?.errorMessage
    },

    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  },
})


export const { login, logout, checkingCredentials } = authSlice.actions;