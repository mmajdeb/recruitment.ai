import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const AuthCallback = () => {
  const { handleGoogleCallback, setLoading } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const userData = query.get("user");

    if (userData) {
      handleGoogleCallback(userData)
        .then(() => {
          navigate("/"); // Redirect to home page on success
        })
        .catch((err) => {
          console.error("Failed to handle Google callback", err);
          setError("Failed to handle Google callback.");
        });
    } else {
      setError("No user data found in the URL.");
      setLoading(false);
    }
  }, [handleGoogleCallback, navigate, setLoading]);

  return <div>{error ? <div>Error: {error}</div> : <div>Loading...</div>}</div>;
};

export default AuthCallback;
