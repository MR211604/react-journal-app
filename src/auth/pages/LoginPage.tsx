import { useDispatch } from "react-redux"
import { Button, Grid2, TextField, Typography, Link } from "@mui/material"
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth"
import { AppDispatch } from "../../store"

export const LoginPage = () => {


  const dispatch = useDispatch<AppDispatch>(); 

  //TODO: implementar formulario haciendo uso de Zod (?)
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password })
    dispatch(checkingAuthentication({ email, password }));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }


  return (
    <AuthLayout title="Welcome back!">
      <form onSubmit={onSubmit}>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              placeholder="email@example.com"
              fullWidth
              value={email}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              name="password"
              placeholder=""
              fullWidth
              value={password}
              onChange={onInputChange}
            />
          </Grid2>

        </Grid2>

        <Grid2 container spacing={2} sx={{ mb: 2, mt: 2 }}>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
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
