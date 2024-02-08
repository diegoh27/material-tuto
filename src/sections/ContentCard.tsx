import { Container, Typography } from "@mui/material";
import { CardProduct } from "../components/CardProduct";
import { BlueCard } from "../components/blueCard";

export function ContentCard() {
  return (
    <div
      id="content-card"
      className=" min-h-[100vh] max-w-[100vw]  bg-blue-400"
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#9999",
        }}
      >
        <Typography textAlign={"center"}>Otra seccion</Typography>
        <CardProduct />
        <BlueCard />
      </Container>
    </div>
  );
}
