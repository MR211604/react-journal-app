import { Grid2, Typography } from "@mui/material"

interface Props {
  children: React.ReactNode,
  title: string
}

export const AuthLayout = ({ children, title }: Props) => {
  return (
    <Grid2
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid2 sx={{ width: { sm: 450 }, boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)', backgroundColor: 'white', padding: 3, borderRadius: 2 }}>

        <Typography variant="h5" sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', mb: 1 }} >{title}</Typography>

        {/* Children */}
        {children}
      </Grid2>
    </Grid2>
  )
}
