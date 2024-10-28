import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

interface Props {
  drawerWidth: number
}

export const Sidebar = ({ drawerWidth = 240 }: Props) => {

  const { displayName } = useSelector((state: RootState) => state.auth)

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component='nav'>{displayName as string}</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
