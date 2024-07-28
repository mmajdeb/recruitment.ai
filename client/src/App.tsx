import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import NavBar from "./components/navbar/NavBar";
import AuthCallback from "./components/auth/AuthCallback";
import { useAuthContext } from "./hooks/useAuthContext";
import { AuthProvider } from "./providers/AuthProvider";

const App: React.FC = () => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <NavBar isAuthenticated={!!user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/profile" element={user ? <Profile /> : <Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const AppWrapper: React.FC = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;
