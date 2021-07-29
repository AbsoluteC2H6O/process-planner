//import "./App.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
export default function Data() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Typography variant="h6" component="h2">
        Algoritmo FCFS (Primero en venir es el primero en servirse)
      </Typography>
      <Typography paragraph></Typography>
      <Typography paragraph>
        También llamado FIFO (del inglés First In, First Out). Este algoritmo es
        muy sencillo y simple, pero también el que menos rendimiento ofrece,
        básicamente en este algoritmo el primer proceso que llega se ejecuta y
        una vez terminado se ejecuta el siguiente.{" "}
      </Typography>
    </>
  );
}
