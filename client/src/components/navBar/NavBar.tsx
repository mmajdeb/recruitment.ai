import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Home
          </Link>
        </Typography>
        {isAuthenticated ? (
          <>
            <Button color="inherit" component={Link} to="/profile">Profile</Button>
            <Button color="inherit" component="a" href={`${import.meta.env.VITE_API_URL}/logout`}>Logout</Button>
          </>
        ) : (
          <Button color="inherit" component="a" href={`${import.meta.env.VITE_API_URL}/auth/google`}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
