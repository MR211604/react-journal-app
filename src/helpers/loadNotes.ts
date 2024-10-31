import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";
import { Note } from "../types/types";

export const loadNotes = async (uid: string) => {

  if (!uid) throw new Error('uid is required');

  const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);

  const docs = await getDocs(collectionRef);

  //TODO: Tipar correctamente las notas 
  const notes: Note[] = [];

  docs.forEach(doc => {
    notes.push({
      id: doc.id,
      title: doc.data().title,
      body: doc.data().body,
      date: doc.data().date
    })
  })
  
  console.log(notes)

  return notes


}