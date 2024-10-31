import { doc, collection, setDoc } from "firebase/firestore/lite"
import { Note } from "../../types/types"
import { AppDispatch, RootState } from "../store"
import { firebaseDB } from "../../firebase/config"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice"
import { loadNotes } from "../../helpers"

export const startNewNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {

    dispatch(savingNewNote())

    const { uid } = getState().auth

    const newNote: Note = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    //Insertando la nueva nota en Firestore
    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)
    newNote.id = newDoc.id

    //!Dispatch
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth
    if (!uid) throw new Error('uid is required')
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes))
  }
}

export const startSavingNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    
    dispatch(setSaving())

    const { uid } = getState().auth
    
    const { active: note } = getState().journal

    const noteToFirestore = { ...note }

    delete noteToFirestore.id

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note?.id}`)
    await setDoc(docRef, noteToFirestore, { merge: true })

    dispatch(updateNote( note ))

  }
}