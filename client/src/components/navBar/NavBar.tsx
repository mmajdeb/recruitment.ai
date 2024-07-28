import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

interface NavBarProps {
  isAuthenticated: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isAuthenticated }) => {
  const { login, logout, user } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "white", flexGrow: 1 }}
        >
          Recruitment.AI
        </Typography>
        <Box>
          {isAuthenticated ? (
            <>
              <Avatar
                src={user?.photos[0].value}
                alt="Profile"
                onClick={handleClick}
                sx={{ cursor: "pointer" }}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ autoFocusItem: false }}
              >
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={handleClose}
                  autoFocus={false}
                >
                  <ListItemText primary={user?.displayName} />
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/settings"
                  onClick={handleClose}
                  autoFocus={false}
                >
                  Settings
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    logout();
                    handleClose();
                  }}
                  autoFocus={false}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" onClick={login}>
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
