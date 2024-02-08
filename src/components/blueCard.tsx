import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export function BlueCard() {
  return (
    <Card
      sx={{
        mt: 5,
        background: "#353535",
        color: "white",
        transition: "0.25s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="img"
          image="https://mf.b37mrtl.ru/actualidad/public_images/2023.04/article/6428f17859bf5b120e372983.jpg"
          sx={{
            height: "300px",
            objectFit: "fill",
            objectPosition: "center",
          }}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h4">Card Title</Typography>
        <Typography variant="body2" component={"p"}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
        <Button size="small" color="error" variant="text">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
