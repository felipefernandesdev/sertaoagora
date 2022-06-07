import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function MediaCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 500, mt: 2 }}>
        <CardMedia
          component="img"
          height="280"
          image="/images/01.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="h4" color="primary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            odio iusto ratione, assumenda.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
