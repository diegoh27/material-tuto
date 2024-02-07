import { Container, Typography } from "@mui/material";
import { CardProduct } from "../components/CardProduct";

export function ContentCard() {
  return (
    <div id="content-card">
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          backgroundColor: "#9999",
          height: "100vh",
        }}
      >
        <Typography textAlign={"center"}>Otra seccion</Typography>
        <CardProduct />
      </Container>
    </div>
  );
}
