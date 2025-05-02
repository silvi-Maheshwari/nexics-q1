import { Container, Typography } from "@mui/material";
import GoogleSignInButton from "../components/GoogleSignInButton";

export default function Home() {
  return (
    <Container style={{ marginTop: "100px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        google login
      </Typography>
      <GoogleSignInButton />
    </Container>
  );
}
