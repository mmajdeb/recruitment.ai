import { createContext, useState, ReactNode } from "react";
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

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  login: () => void;
  logout: () => Promise<void>;
  handleGoogleCallback: (userData: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = () => {
    window.location.href = "/api/login";
  };

  const handleGoogleCallback = async (userData: string) => {
    try {
      const parsedUser = JSON.parse(decodeURIComponent(userData));
      setUser(parsedUser);
    } catch (error) {
      console.error("Google callback failed", error);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.get("/api/logout", {
        withCredentials: true,
      });
      if (response.data.success) {
        setUser(null);
        window.location.href = "/";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, handleGoogleCallback, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
