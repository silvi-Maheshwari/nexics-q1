import { Button } from "@mui/material";
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";

const GoogleSignInButton = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      console.error("Google sign-in error", error);
    }
  };

  return (
    <Button variant="contained" onClick={handleSignIn}>
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;
