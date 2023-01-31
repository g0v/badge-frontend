import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import GolfCourseIcon from '@mui/icons-material/GolfCourse'
import Button from '@mui/material/Button'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'

import { ThemeProvider, createTheme } from '@mui/material/styles'
const search = ['成員', '坑', '成就']
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})

const drawerWidth = 240

export default function CustomAppBar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Box sx={{ flexGrow: 1 }} style={{ color: 'black' }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
              <Box sx={{ width: 250 }} role="presentation">
                <List>
                  <ListItem>
                    <ListItemText>g0v 成就系統</ListItemText>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <SearchIcon />
                    </ListItemIcon>
                    <ListItemText>綜合搜尋</ListItemText>
                  </ListItem>
                  <ListItem>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="搜尋"
                      defaultValue="EUR"
                      helperText="找人?找坑?找成就?"
                    >
                      {search.map((option) => (
                        <MenuItem>{option}</MenuItem>
                      ))}
                    </TextField>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <GolfCourseIcon />
                      </ListItemIcon>
                      <ListItemText primary="坑坑列表" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <MilitaryTechIcon />
                      </ListItemIcon>
                      <ListItemText primary="成就/稱號列表" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BADGE
            </Typography>
            {/* language selector */}
            <Button color="inherit">登入</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  )
}
