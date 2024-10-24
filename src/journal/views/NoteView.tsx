import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <>
      <Grid container direction='row' alignItems='center' justifyContent='space-between' sx={{ mb: 1 }}>
        <Grid item>
          <Typography fontSize={39} fontWeight='light'>28 de agosto de 2024</Typography>
        </Grid>

        <Grid item>
          <Button color='primary' sx={{ padding: 2 }}>
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
            label="Title"
            sx={{ border: 'none', mb: 1, mt: 2 }}
          />

          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
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