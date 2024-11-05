import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import SideBarItem from "./SideBarItem"
import { useAppSelector } from "../../hooks"

interface Props {
  drawerWidth: number
}

export const Sidebar = ({ drawerWidth = 240 }: Props) => {

  const { displayName } = useAppSelector((state) => state.auth)
  const { notes } = useAppSelector((state) => state.journal)

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
            notes?.map((note) => (
              <SideBarItem key={note.id} note={note} />
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
