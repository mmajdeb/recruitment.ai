import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  photos: Array<{ value: string }>;
  provider: string;
  _raw: string;
  _json: {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
  };
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/profile", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const login = () => {
    window.location.href = "/api/auth/google";
  };

  const logout = async () => {
    try {
      const response = await axios.get("/api/logout", {
        withCredentials: true,
      });
      if (response.data.success) {
        setUser(null);
        window.location.href = "/"; // Redirect to home page after logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return { user, loading, login, logout };
};

export default useAuth;
