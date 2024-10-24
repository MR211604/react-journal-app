import { StarOutline } from "@mui/icons-material"
import { Grid, Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 5 }}
    >
      <Grid2 size={{ xs: 12 }}>
        <StarOutline sx={{fontSize: 100, color: 'white'}} />
      </Grid2>

      <Grid2 size={{ xs: 12 }}>
        <Typography color="white" variant="h5">Select or create a new note</Typography>
      </Grid2>

    </Grid>
  )
}