import { Container, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";

export default function NavSection() {
  return (
    <div
      id="nav-section"
      style={{ minHeight: "100vh", maxWidth: "100vw", background: "#ede0d4" }}
    >
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          background: "#ede0d4",
        }}
      >
        <Typography>NavSection</Typography>
      </Container>
    </div>
  );
}
