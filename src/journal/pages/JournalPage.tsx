import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {


  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, esse!</Typography> */}

      <NothingSelectedView />

      {/* <NoteView /> */}

      <IconButton
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
        <AddOutlined sx={{fontSize: 25}} />
      </IconButton>

    </JournalLayout>
  )
}
