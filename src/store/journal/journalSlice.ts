import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/types";

interface InitialState {
  isSaving: boolean
  savedMessage: string
  notes?: Note[] | null
  active: Note | null
}

const initialState: InitialState = {
  isSaving: false,
  savedMessage: '',
  notes: [],
  active: null
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState: initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes?.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.savedMessage = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.savedMessage = ''
      //todo: Mensaje de error
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes?.map(note => {
        if(note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
      state.savedMessage = `Nota actualizada correctamente`  
    },
    deleteNoteById: (state, action) => {

    }
  }
})

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;