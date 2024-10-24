import { Box, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from "../components"

interface Props {
  children: React.ReactNode
}

const drawerWidth = 240

export const JournalLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>

      {/* Navbar */}
      <Navbar drawerWidth={drawerWidth} />

      {/* SideBar */}
      <Sidebar drawerWidth={drawerWidth} />

      <Box component='main' sx={{ flexGrow: 1, p: 1 }}>

        {/* Toolbar */}

        <Toolbar />

        {children}

      </Box>


    </Box>
  )
}
