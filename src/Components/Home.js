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
export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
    <Typography variant="h5" component="h2">Algoritmos de planificación de procesos</Typography>
    <Typography paragraph>
         </Typography>
      <Typography paragraph>
        Los algoritmos de planificacion existen debido a la necesidad de ganar eficiencia en la direccion de procesos
        del computador y el uso optimo del CPU. Algunos conceptos y aspectos a tener en cuenta son:
         </Typography>
         <List>
          <ListItem
           
          >
            <ListItemText primary={"-Tiempo de espera"} secondary={"l tiempo que un proceso permanece en espera en la cola de ejecución."}/>
          </ListItem>
        </List>
        <List>
          <ListItem
           
          >
            <ListItemText primary={"-Tiempo de retorno"} secondary={"Tiempo que va desde que se lanza un proceso hasta que finaliza."}/>
          </ListItem>
        </List>
        <List>
          <ListItem
           
          >
            <ListItemText primary={"-Tiempo de respuesta"} secondary={"Por último éste se define a el tiempo que un proceso bloqueado tarda en entrar en ejecución."}/>
          </ListItem>
        </List>
        <List>
          <ListItem
           
          >
            <ListItemText primary={"-Uso de CPU"} secondary={"Porcentaje de tiempo que la CPU está ocupada."}/>
          </ListItem>
        </List>
        <List>
          <ListItem
           
          >
            <ListItemText primary={"-Productividad"} secondary={" Número de procesos realizados en una unidad de tiempo."}/>
          </ListItem>
        </List>
        <Typography variant="h6" component="h2">Nota importante</Typography>
      <Typography paragraph>
        En el boton de Data puede crear una lista de procesos y editarla de lo contrario se cargara la lista de procesos de prueba.

      </Typography>
    </>
  );
}
