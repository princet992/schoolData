import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "whitesmoke", color: "#000" }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          sx={{
            mr: 2,
            display: { xs: "block", sm: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My School App
        </Typography>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Students</MenuItem>
          <MenuItem onClick={handleClose}>Requests</MenuItem>
        </Menu>

        <NavLink to="/">
          <Button
            color="inherit"
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            Home
          </Button>
        </NavLink>
        <NavLink to="/home">
          <Button
            color="inherit"
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            Schools
          </Button>
        </NavLink>
        <NavLink to="/studentForm">
          <Button
            color="inherit"
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            Add Students
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
