import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      {user ? (
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                src={user.photos[0].value}
                alt="Profile"
                sx={{ width: 120, height: 120, mr: 2 }}
              />
              <Box>
                <Typography variant="h6">{user.displayName}</Typography>
                <Typography variant="body1">
                  Given Name: {user.name.givenName}
                </Typography>
                <Typography variant="body1">
                  Family Name: {user.name.familyName}
                </Typography>
                <Typography variant="body1">
                  Provider: {user.provider}
                </Typography>
                <Typography variant="body1">Sub: {user._json.sub}</Typography>
                <Typography variant="body1">
                  Full Name: {user._json.name}
                </Typography>
                <Typography variant="body1">
                  Given Name (JSON): {user._json.given_name}
                </Typography>
                <Typography variant="body1">
                  Family Name (JSON): {user._json.family_name}
                </Typography>
              </Box>
            </Box>
            <Button variant="contained" color="primary" onClick={logout}>
              Logout
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1">No user information available.</Typography>
      )}
    </Container>
  );
};

export default Profile;
