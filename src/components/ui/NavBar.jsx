import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ContrastIcon from "@mui/icons-material/Contrast";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../features/AuthSlice/AuthSlice";
import { Container } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { toggleTheme } from "../../features/ThemeSlice/ThemeSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticate, userLogin } = useSelector((state) => state.Auth);
  const { theme } = useSelector((state) => state.Themes);

  const settings = ["Profile", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting === "Logout") {
      dispatch(logOut());
    }
  };

  const handleThemes = () =>{
    dispatch(toggleTheme())
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme === "light" ? "#fff" : "#414141",
          color: theme === "light" ? "#414141" : "#fff",
          top: 0,
          paddingInline: { xs: "", md: "20px" },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "sans-serif",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              My School App
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {isAuthenticate && userLogin.role === "admin" ? (
                  <div>
                    <NavLink to="/home">
                      <MenuItem onClick={handleCloseNavMenu}>
                        Schools List
                      </MenuItem>
                    </NavLink>
                    <NavLink to="/schoolForm">
                      <MenuItem onClick={handleCloseNavMenu}>
                        Add School
                      </MenuItem>
                    </NavLink>
                  </div>
                ) :
                <NavLink to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                 Home
                </MenuItem>
              </NavLink>
                 }
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "fantasy",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              My School App
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                },
              }}
            >
              {isAuthenticate && userLogin.role === "admin" ? (
                <>
                  <NavLink to="/home">
                    <Button
                      color="inherit"
                      sx={{
                        display: { xs: "none", sm: "inline", fontWeight: 600 },
                      }}
                    >
                      Schools List
                    </Button>
                  </NavLink>
                  <NavLink to="/schoolForm">
                    <Button
                      color="inherit"
                      sx={{
                        display: { xs: "none", sm: "inline", fontWeight: 600 },
                      }}
                    >
                      Add School
                    </Button>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/studentForm">
                    <Button
                      color="inherit"
                      sx={{ display: { xs: "none", sm: "inline" } }}
                    >
                      Student Form
                    </Button>
                  </NavLink>
                </>
              )}
            </Box>
           {
            isAuthenticate &&
            <Box sx={{ flexGrow: 0, marginInlineStart: "5px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <AccountCircle
                  sx={{
                    outline: "1px solid green",
                    borderRadius: "100%",
                    backgroundColor: theme === "light" ? "#fff" : "#000",
                    color: theme === "light" ? "#000" : "#fff",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  {setting === "Logout" ? (
                    <Typography sx={{ textAlign: "center" }}>
                      Logout
                    </Typography>
                  ) : (
                    <NavLink to={`/${setting}`}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </NavLink>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
           }
            <Button
              onClick={handleThemes}
              className={`ms-3 ${
                theme === "light" ? "text-[#000]" : "text-[#fff]"
              }`}
              title={`${theme} theme`}
            >
              {theme === "light" ? <ContrastIcon /> : <DarkModeIcon />}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
