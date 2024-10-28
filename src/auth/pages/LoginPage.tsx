import { useDispatch, useSelector } from "react-redux"
import { Button, Grid2, TextField, Typography, Link, Alert } from "@mui/material"
import { Google } from '@mui/icons-material'
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { AuthLayout } from "../layout"
import { useForm } from "../../hooks"
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth"
import { AppDispatch, RootState } from "../../store"
import { useMemo } from "react"

export const LoginPage = () => {

  const { status, errorMessage } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  //TODO: implementar formulario haciendo uso de Zod (?)
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password })
    dispatch(startLoginWithEmailAndPassword({ email, password }));
    navigate('/');
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
    navigate('/');
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


        <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }} display={!!errorMessage ? '' : 'none'}>
          <Alert severity="error">{errorMessage as string}</Alert>
        </Grid2>

        <Grid2 container spacing={2} sx={{ mb: 2, mt: 2 }}>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant="contained" fullWidth>
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
