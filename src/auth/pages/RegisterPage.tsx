import { Button, Grid2, Link, TextField } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Create an account">
      <form>
        <Grid2 container>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="John Doe"
              fullWidth
            />
          </Grid2>

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

          <Grid2 size={{ xs: 12, sm: 12 }}>
            <Button variant="contained" fullWidth>
              Create account
            </Button>
          </Grid2>

        </Grid2>

        <Grid2 container direction='row' justifyContent='end'>
          <Link component={RouterLink} color="inherit" to='/auth/login'>
            Already have an account?
          </Link>
        </Grid2>

      </form>
    </AuthLayout>
  )
}
