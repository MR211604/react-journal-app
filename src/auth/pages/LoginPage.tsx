import { Button, Grid2, TextField, Typography, Link } from "@mui/material"
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout"

export const LoginPage = () => {
  return (
    <AuthLayout title="Welcome back">
      <form>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@example.com"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder=""
              fullWidth
            />
          </Grid2>

        </Grid2>

        <Grid2 container spacing={2} sx={{ mb: 2, mt: 2 }}>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Button variant="contained" fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Login with Google</Typography>
            </Button>
          </Grid2>

        </Grid2>

        <Grid2 container direction='row' justifyContent='end'>
          <Link component={RouterLink} color="inherit" to='/auth/register'>
            Create an account
          </Link>
        </Grid2>

      </form>
    </AuthLayout>
  )
}
