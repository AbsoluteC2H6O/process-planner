
//import { makeStyles, useTheme } from "@material-ui/core/styles";
import TableData from "./TableData";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
// }));
export default function Data() {
  // const classes = useStyles();
  // const theme = useTheme();
  // const proceso ={
  //   processName:"",
  //   waitTime:0,//Tw
  //   bloquedTime:0,//Tb
  //   ejecutionTime:0,//Te
   
  //   statusProcess: 0,//0: en espera, 1: bloqueado, 2: completado, 3: en cpu ejecutando,4: terminado
  //   comingTime:0,//tiempo de llegada
  //  // queantum:[],//quantu time
  
  // }
  // const system ={
  //   completed:0,
  //   completedList:[],//ejecutados
  //   bloquedList:[],//bloquedaos
  //   cpuList:[],//ejecutando
  //   terminatedList:[],
  //   cpuMemory:[],
  //   queantum:[],
  //   timeTranscurred:0,
  //   //rcpu
  // }
  return (
    <>

      <TableData/>
    </>
  );
}
