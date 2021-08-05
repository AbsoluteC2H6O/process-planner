//import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DataAleatoria from "../Components/DataAleatoria";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import BlockIcon from "@material-ui/icons/Block";
import CircularProgress from "@material-ui/core/CircularProgress";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import StopIcon from "@material-ui/icons/Stop";
import DoneIcon from "@material-ui/icons/Done";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AdjustIcon from "@material-ui/icons/Adjust";
import Timer from "../Components/Timer";
import OfflinePinSharpIcon from "@material-ui/icons/OfflinePinSharp";
//import CircularProgress from '@material-ui/core/CircularProgress';
//import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper2: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 200,
  },
  paper3: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[6],
    padding: theme.spacing(2, 4, 3),
    height: 15,
  },
}));
let queueB = [];
let queueL = [];
let queueC = [];
let queueT = [];

// let selectedProcessE = {
//   processName: "",
//   comingTime: 0,
//   ejecutionTime: 0,
//   bloquedTime: 0,
//   waitTime: 0,
// };
let selectedProcessE = null;
let positionP = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let i=10;
let sample = [];
export default function Fcfs() {
  const classes = useStyles();
  // const theme = useTheme();
  const dataselected = useSelector((state) => state.dataselected);
  const [option, setOption] = useState(0);
  const [option2, setOption2] = useState(0);
  const [option3, setOption3] = useState(0);
  const [option4, setOption4] = useState(0);
  const [time, setTime] = React.useState(0);
  const [start, setStart] = useState(false);
  const [startOp, setStartOp] = useState(true);
  const [progress, setProgress] = React.useState(0);
  const [progress2, setProgress2] = React.useState(0);
  const [list, setList] = useState([]);
  const [selectedProcess, setSelectedProcess] = React.useState(12);
  const [ejec, setEjec] = useState(false);
  // console.log("dataselected", dataselected);
  // dataselected.map((item,index)=>{
  //   console.log("item",item);
  // })

  const handleButton1 = () => {
    queueC = dataselected;
    setTimeout(() => {
      //setTime(time+1);

      setOption(1);
    }, 800);
  };
  const handleButton2 = () => {
    setOption(2);
  };

  const handleButton4 = () => {
    setStart(true);
    // setStartOp(false);
    // setTimeout(() => {
    //   //setTime(time+1);
    //   setStartOp(true);
    // }, 500);
    // setTime(time + 1);
    // setProgress((prevProgress) =>
    //   prevProgress >= selectedProcess ? 0 : prevProgress + 1
    // );
    //setProgress2((prevProgress2) => (prevProgress2 >= selectedProcess ? 0 : prevProgress2 + selectedProcess*0.1));
    // if (setProgress === 0) {
    //   setSelectedProcess(null);
    // }

    // const timer = setInterval(() => {
    //   setTime(time+1);
    // }, 1000);

    // clearInterval(timer);
  };
  const handleButton5 = () => {
    setStart(false);
    setTime(0);
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    setOption2(1);

    queueC = dataselected;
    queueL = [];
    queueB = [];
    queueT = [];
    selectedProcessE = null;
    setEjec(false);
    setTimeout(() => {
      //setTime(time+1);
      setOption2(0);
      // queueL = dataselected;
      //queueB= dataselected
    }, 800);

    //
  };
  const min = 1;
  const max = 10;
  // const min2 = 20;
  // const max2 = 100;
  function uno_a_tres() {
    let n3=0;
    // sea n100 un número del 1 al 100 y n3 el resultado de tu función
    var n100 = Math.floor(Math.random() * 100 + 1);

    if (n100 <= 25) {
      n3 = 1;
    } else if (n100 <= 75) {
      n3 = 2;
    } else {
      n3 = 3;
    }
    return n3;
  }
  function promedioEspera() {
    let promedio = 0;
    queueC.map((item,index)=>{
      promedio+=item.waitTime-time;
    });
    if(queueC.length ===0){
      return 0;
    }else{
      return (promedio/queueC.length).toFixed(2);
    }
    
  }
  function Listos() {
    let promedio = 0;
    queueL.map((item,index)=>{
      promedio+=item.waitTime;
    });
    if(queueL.length ===0){
      return 0;
    }else{
      return (promedio/queueL.length).toFixed(2);
    }
    
  }
  function bloqueo() {
    let promedio = 0;
    queueB.map((item,index)=>{
      promedio+=item.waitTime;
    });
    if(queueB.length ===0){
      return 0;
    }else{
      return( promedio/queueB.length).toFixed(2);
    }
   
  }
  function nuevosProcesos() {
    let promedio = 0;
    queueC.map((item,index)=>{
      promedio+=item.waitTime;
    });
    if(queueC.length ===0){
      return 0;
    }else{
      return (promedio/queueC.length -2,5).toFixed(2);
    }
   
  }
  function terminados() {
    let promedio = 0;
    queueT.map((item,index)=>{
      promedio+=item.waitTime;
    });
    if(queueT.length ===0){
      return 0;
    }else{
      return (promedio/queueT.length).toFixed(2);
    }
   
  }
  function Ejecucion() {
    let promedio = 0;
    queueT.map((item,index)=>{
      promedio+=item.ejecutionTime;
    });
    if(queueT.length ===0){
      return 0;
    }else{
      return (promedio/queueT.length).toFixed(2);
    }
   
  }

  function createData(
    id,
    processName,
    waitTime,
    ejecutionTime,
    bloquedTime,
    comingTime
  ) {
    return { id, processName, waitTime, ejecutionTime, bloquedTime, comingTime };
  }
  React.useEffect(() => {
    // queueC = dataselected;
    if (start === true) {
      const timer = setInterval(() => {
 
        let prob = uno_a_tres();
        if (prob ===1) {
          let con2 = Math.floor(Math.random() * (max - min)) + min;
          let con1 = Math.floor(Math.random() * (count1+10 - count1+3)) + count1+2;
          let con3 = Math.floor(Math.random() * (max - min)) + min;
          let con4 = Math.floor(Math.random() * (max - min)) + min;
          i+=1;
          sample.push([`P${queueC.length+1}`, con1, con2, con3, con4]);
          queueC.push(createData(queueC.length, ...sample[0]));
          sample=[];
        }

        if (queueC.length > 0) {
          let queueAux = [];
          let queueAux2 = [];
          //  setData(noverades?.data.filter((item) => item.id != deleteId));
          //   setList(queueC?.filter((item) => item.waitTime === count1));
          ///  console.log(" antes de asignar queueC", queueC.length,"queueuAux", queueAux.length,"queue L", queueL.length,"queueuAux 2", queueAux2.length,);

          queueAux = queueC.filter((queuec) => queuec.waitTime !== count1);
          queueAux2 = queueC.filter((queuec) => queuec.waitTime === count1);
          queueC = queueAux;

          //  queueL+=queueAux;
          queueAux2.map((item, index) => {
            // console.log("entre a map");
            queueL.push(item);
          });

          //  console.log("queueC", queueC.length,"queueuAux", queueAux.length,"queue L", queueL.length,"queueuAux 2", queueAux2.length,);
        }

        if (queueL.length > 0) {
          // console.log("entre a guardar sele",ejec,selectedProcessE);
          if (selectedProcessE === null) {
            setEjec(true);
            count2=0;
            setProgress(0);
            selectedProcessE = queueL.shift();
            console.log("entro aca", ejec);
          }
        }

        count1 += 1;

        if (selectedProcessE !== null) {
          if (count2 <= selectedProcessE.ejecutionTime) {
            count2 += 1;
          }
          setProgress((prevProgress) =>
            prevProgress > selectedProcessE.ejecutionTime ? 0 : prevProgress + 1
          );
        }
        //   setProgress2((prevProgress2) => (prevProgress2 >= selectedProcess ? 0 : prevProgress2 + selectedProcess*0.1));
        // if (progress === 0) {
        //   setSelectedProcess(null);
        // }

        setTime((prevTime) => prevTime + 1);
        // console.log("count1", count1);
        // console.log(selectedProcessE.processName,"times ejecution",selectedProcessE.ejecutionTime,"progress",progress,"time",time);
        if (selectedProcess !== null) {
          // console.log("selectedejection/count2",selectedProcessE.ejecutionTime,count2);
          if (count2 === selectedProcessE?.ejecutionTime) {
            //positionP +=1;
            //  console.log("entre 1", queueL, selectedProcessE);

            count2 = 0;
            if (queueL.length > 0) {
              //   setStartOp(false);
              queueT.push(selectedProcessE);
              // console.log("saque de cola")
              selectedProcessE = queueL.shift();
              setProgress(0);
          
            } else {
              setProgress(0);
              queueT.push(selectedProcessE);
              selectedProcessE = null;
              count2 = 0;
              setProgress(0);
              setEjec(false);
            }
          }
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }

  }, [start]);

  return (
    <>
      {option !== 0 && (
        <>
          {" "}
          <Button
            variant="contained"
            color="primary"
            onClick={handleButton4}
            style={{
              width: 250,
              marginTop: 0,
              marginLeft: 0,
              marginBottom: 10,
            }}
          >
            Comenzar simulacion
            <PlayCircleOutlineIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButton5}
            style={{
              width: 250,
              marginTop: 0,
              marginLeft: 80,
              marginBottom: 10,
            }}
          >
            Detener simulacion
            <StopIcon />
          </Button>
        </>
      )}
      {option === 0 && (
        <>
          {" "}
          <Typography variant="h6" component="h2">
            Algoritmo FCFS (Primero en venir es el primero en servirse)
          </Typography>
          <Typography paragraph></Typography>
          <Typography paragraph>
            También llamado FIFO (del inglés First In, First Out). Este
            algoritmo es muy sencillo y simple, pero también el que menos
            rendimiento ofrece, básicamente en este algoritmo el primer proceso
            que llega se ejecuta y una vez terminado se ejecuta el siguiente.{" "}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButton1}
            style={{
              width: 170,
              marginTop: 30,
              marginLeft: 100,
              marginBottom: 10,
            }}
          >
            Cargar data aleatoria
          </Button>

        </>
      )}
      {option === 0 && <DataAleatoria />}


      {option === 1 && (
        <Grid container spacing={2}>
          <Grid item sm={3} xs={3} md={3} style={{ heigh: 1000 }}>
            <Paper className={classes.paper}>Cola procesos</Paper>
            <Paper className={classes.paper3}>
              <Typography variant="h6" component="h2">
                Total: {queueC.length}{"      "}
                Promedio: {promedioEspera()}
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              {option2 === 0 ? (
                <div>
                  {queueC.length > 0 &&
                    queueC.map((item, index) => (
                      <>
                        <>
                          {" "}
                          <Card key={item.id} className={classes.root}>
                            <CardActionArea>
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="h2"
                                >
                                  {item.processName}
                                </Typography>
                                <Typography
                                  variant="subtitle1"
                                  color="textSecondary"
                                  component="p"
                                >
                                  Tb: {item.bloquedTime}
                                  {"     "}
                                  Te: {item?.waitTime}
                                  {/* {"      "}
                                  Te: {item.ejecutionTime} */}
                                  {"     "}
                                  Tc: {item.comingTime}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                         
                              <Paper className={classes.paper}>
                                {" "}
                                Tw: {item.waitTime}  
                              </Paper>
                              <Paper className={classes.paper}>
                                {" "}
                                T transcurrido: {time}
                              </Paper>
                            </CardActions>
                          </Card>
                          <Divider />
                        </>
                      </>
                    ))}
                </div>
              ) : (
                <CircularProgress />
              )}
            </Paper>
          </Grid>
          <Grid item sm={3} xs={3} md={3}>
            <Paper className={classes.paper}>Contadorde tiempo</Paper>

            <Paper className={classes.paper3}>
              <Typography variant="h6" component="h2">
                {time}
              </Typography>
            </Paper>
            {selectedProcessE !== null && (
              <>
                {" "}
                <Paper className={classes.paper}>
                  <Typography variant="h6" component="h2" color="primary">
                    Proceso en ejecucion{selectedProcessE.processName}{"    "}
                    Promedio: {Ejecucion()}
                  </Typography>
                </Paper>
                <Divider />
              </>
            )}

    
            <Card className={classes.root}>
              {startOp && selectedProcessE !== null ? (
                <>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {selectedProcessE.processName}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        component="p"
                      >
                        Tb: {selectedProcessE.bloquedTime}
                        {"     "}
                        Tw: {selectedProcessE.waitTime}
                        {"      "}
                        Te: {selectedProcessE.ejecutionTime}
                        {"     "}
                        Tc: {selectedProcessE.comingTime}
                      </Typography>
                    </CardContent>
                  </CardActionArea>{" "}
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      <BlockIcon />
                      Bloquear
                    </Button> */}
                    <Paper className={classes.paper3}>
                      {" "}
                      {progress}/{selectedProcessE.ejecutionTime}
                    </Paper>
                  </CardActions>
                </>
              ) : (
                <></>
              )}
            </Card>
            <Divider />

            <Paper className={classes.paper}>
              <Typography variant="h6" component="h2" color="primary">
                Terminados {queueT.length}{"       "}
                Promedio: {terminados()}
              </Typography>
            </Paper>
            <Divider />
            <Paper className={classes.paper}>
              {option2 === 0 ? (
                <div>
                  {queueT.length > 0 &&
                    queueT.map((item, index) => (
                      <>
                        <Card key={item.id} className={classes.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {item.processName}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                color="textSecondary"
                                component="p"
                              >
                                Tb: {item.bloquedTime}
                                {"     "}
                                Tw: {item.waitTime}
                                {"      "}
                                Te: {item.ejecutionTime}
                                {"     "}
                                Tc: {item.comingTime}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                        <Divider />
                      </>
                    ))}
                </div>
              ) : (
                <CircularProgress />
              )}
            </Paper>
          </Grid>

          <Grid item sm={3} xs={3} md={3}>
            <Paper className={classes.paper}>Cola listos</Paper>
            <Paper className={classes.paper3}>
              <Typography variant="h6" component="h2">
                Total: {queueL.length}{"      "}
                Promedio: {Listos()}
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              {option2 === 0 ? (
                <div>
                  {queueL.length > 0 &&
                    queueL.map((item, index) => (
                      <>
                        <Card key={item.id} className={classes.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {item.processName}
                                <OfflinePinSharpIcon />
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                color="textSecondary"
                                component="p"
                              >
                                Tb: {item.bloquedTime}
                                {"     "}
                                Tw: {item.waitTime}
                                {"      "}
                                Te: {item.ejecutionTime}
                                {"     "}
                                Tc: {item.comingTime}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                        
                          </CardActions>
                        </Card>
                        <Divider />
                      </>
                    ))}
                </div>
              ) : (
                <CircularProgress />
              )}
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
}
