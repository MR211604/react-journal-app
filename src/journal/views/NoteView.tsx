import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useAppDispatch, useAppSelector, useForm } from "../../hooks"
import { useEffect, useMemo } from "react"
import { setActiveNote, startSavingNote } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

  const dispatch = useAppDispatch();

  const { active: activeNote, savedMessage, isSaving } = useAppSelector((state) => state.journal)

  const { body, title, date, onInputChange, formState } = useForm(activeNote)

  const dateString = useMemo(() => {
    const newDate = new Date(date).toUTCString();
    return newDate
  }, [date])

  useEffect(() => {
    if (savedMessage.length > 0) {
      Swal.fire({
        title: 'Nota actualizada',
        text: savedMessage,
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      })
    }
  }, [savedMessage])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  const onSaveNote = () => {
    dispatch(startSavingNote())
  }

  return (
    <>
      <Grid container direction='row' alignItems='center' justifyContent='space-between' sx={{ mb: 1 }}>
        <Grid item>
          <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>

        <Grid item>
          <Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Create a title"
            name='title'
            value={title}
            onChange={onInputChange}
            sx={{ border: 'none', mb: 1, mt: 2 }}
          />

          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            name='body'
            value={body}
            onChange={onInputChange}
            placeholder="What's up for today?"
            minRows={10}
            sx={{ border: 'none', mb: 1, mt: 2 }}
          />

        </Grid>

        <ImageGallery />

      </Grid>
    </>
  )
}
