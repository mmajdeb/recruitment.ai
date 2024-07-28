import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

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

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
