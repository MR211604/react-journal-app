import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { startLogout } from "../../store/auth"

interface Props {
  drawerWidth: number
}

export const Navbar = ({ drawerWidth }: Props) => {

  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    dispatch(startLogout());
  }

  return (
    <AppBar position="fixed" sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
    }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container justifyContent="space-between" alignItems='center'>
          <Typography variant="h6" noWrap>
            JournalApp
          </Typography>

          <IconButton onClick={onLogout} color='error'>
            <LogoutOutlined />
          </IconButton>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}
