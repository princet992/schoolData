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
import { useSelector } from "react-redux";
const Header = () => {
  const { isAdmin } = useSelector(state => state.Auth)
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
          <NavLink to="/">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </NavLink>
          {/* <NavLink to="/home">
            <MenuItem onClick={handleClose}>Students</MenuItem>
          </NavLink>
          <NavLink to="/studentForm">
            <MenuItem onClick={handleClose}>Requests</MenuItem>
          </NavLink> */}
        </Menu>

        <NavLink to="/">
          <Button
            color="inherit"
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            Home
          </Button>
        </NavLink>
        {isAdmin &&
          <>
            <NavLink to="/home">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", sm: "inline" } }}
              >
                Schools
              </Button>
            </NavLink>
          </>
        }

      </Toolbar>
    </AppBar>
  );
};

export default Header;
