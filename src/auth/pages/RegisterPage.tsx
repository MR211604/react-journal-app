import { Button, Grid2, Link, TextField } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout"
import { FormState, useForm } from "../../hooks"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { startCreateUserWithEmailAndPassword } from "../../store/auth"


//Creando interfaz para formValidations
const formValidations = {
  email: [(value: string) => value.includes('@'), 'Invalid email'],
  password: [(value: string) => value.length >= 6, 'Password must be at least 6 characters long'],
  displayName: [(value: string) => value.length > 3, 'Name must be at least 3 characters long']
}

interface RegisterForm extends FormState {
  email: string;
  password: string;
  displayName: string;
}

export const RegisterPage = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { email, password, displayName, onInputChange, displayNameValid, passwordValid, emailValid, isFormValid, formState } = useForm<RegisterForm>({
    email: "",
    password: "",
    displayName: ""
  }, formValidations);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if(!isFormValid) return;
    dispatch( startCreateUserWithEmailAndPassword(formState) )
    
  }

  return (
    <AuthLayout title="Create an account">
      <form onSubmit={onSubmit}>
        <Grid2 container>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="John Doe"
              fullWidth
              name="displayName"
              onChange={onInputChange}
              value={displayName}
              error={!!displayNameValid && isFormSubmitted}
              // helperText={`${displayNameValid}`}
              helperText={displayNameValid as string}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              onChange={onInputChange}
              value={email}
              placeholder="email@example.com"
              fullWidth
              error={!!emailValid && isFormSubmitted}
              helperText={emailValid as string}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={onInputChange}
              value={password}
              placeholder=""
              fullWidth
              error={!!passwordValid && isFormSubmitted}
              helperText={passwordValid as string}
            />
          </Grid2>


        </Grid2>

        <Grid2 container spacing={2} sx={{ mb: 2, mt: 2 }}>

          <Grid2 size={{ xs: 12, sm: 12 }}>
            <Button type="submit" variant="contained" fullWidth>
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
