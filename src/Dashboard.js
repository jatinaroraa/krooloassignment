import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Divider,
  Switch,
  Collapse,
  CssBaseline,
} from "@mui/material";
import {
  Inbox,
  Mail,
  Folder,
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
  Brightness4,
  Brightness7,
  Menu,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function DashboardLayout() {
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [folderOpen, setFolderOpen] = useState(false);

  // Toggle for drawer
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Toggle for folder collapse
  const handleFolderToggle = () => {
    setFolderOpen(!folderOpen);
  };

  // Toggle for theme
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: open ? 240 : 60,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: open ? 240 : 60,
              boxSizing: "border-box",
              transition: "width 0.3s",
            },
          }}
        >
          <Toolbar>
            <IconButton onClick={handleDrawerToggle}>
              {open ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </Toolbar>
          <Divider />

          {/* Folder Section */}
          <List>
            <ListItem button onClick={handleFolderToggle}>
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              {open && <ListItemText primary="Folder" />}
              {open ? folderOpen ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
            <Collapse in={folderOpen && open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Inbox />
                  </ListItemIcon>
                  {open && <ListItemText primary="Subfolder 1" />}
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  {open && <ListItemText primary="Subfolder 2" />}
                </ListItem>
              </List>
            </Collapse>
          </List>

          <Divider />

          {/* Main Items */}
          <List>
            {[
              "Inbox",
              "Direct Messages",
              "Projects",
              "Goals",
              "Docs",
              "Channels",
              "Teams",
              "Meetings",
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                {open && <ListItemText primary={text} />}
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main Content Area */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Workspace
                <IconButton
                  style={{
                    marginLeft: "20px",
                  }}
                  onClick={handleDrawerToggle}
                >
                  <Menu />
                </IconButton>
              </Typography>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                color="default"
                icon={<Brightness7 />}
                checkedIcon={<Brightness4 />}
              />
              <IconButton color="inherit">
                <Avatar>J</Avatar>
              </IconButton>
            </Toolbar>
          </AppBar>

          {/* Right-side Drawer Toggle */}
          <Toolbar />
          {/* <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            p={1}
          >
            <IconButton onClick={handleDrawerToggle}>
              <Menu />
            </IconButton>
          </Box> */}

          {/* Content below AppBar */}
          <Box sx={{ p: 3 }}>
            <Typography variant="h5">Kroolo Space</Typography>
            {/* Add other components or content here */}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DashboardLayout;
