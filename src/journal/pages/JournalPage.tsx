import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal"
import { useAppDispatch, useAppSelector } from "../../hooks"

export const JournalPage = () => {

  const { isSaving, active: activeNote } = useAppSelector((state) => state.journal)
  const dispatch = useAppDispatch()

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, esse!</Typography> */}

      {
        !!activeNote ? <NoteView /> : <NothingSelectedView />
      }
      {/* <NoteView /> */}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.dark',
            opacity: 0.85
          },
          opacity: 0.85,
          position: 'fixed',
          right: 25,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 25 }} />
      </IconButton>

    </JournalLayout>
  )
}
