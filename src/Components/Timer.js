//import "./App.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
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
    height: 20,
  },
}));

export default function Timer(props) {
  const classes = useStyles();
  //   const [option, setOption] = useState(0);

  //   const [time, setTime] = useState(0);
  //   const [start, setStart] = useState(false);

  //   const [progress, setProgress] = React.useState(0);
  //   const handleButton1 = () => {
  //     queueC = dataselected;
  //     setTimeout(() => {
  //       //setTime(time+1);

  //       setOption(1);
  //     }, 800);
  //   };
  //   const handleButton2 = () => {
  //     setOption(2);
  //   };

  React.useEffect(() => {
    if (props.start === true) {
      const timer = setInterval(() => {
        // setTime(time + 1);
        props.setTime(props.time + 1);
        //setProgress2((prevProgress2) => (prevProgress2 >= selectedProcess ? 0 : prevProgress2 + selectedProcess*0.1));
        if (props.start === false) {
          props.setTime(0);
        }
      }, 1000);

    return () => {
        clearInterval(timer);
      };
    }

  }, []);

  return (
    <>
      <Paper className={classes.paper}>
        Contadorde tiempo/ Proceso en ejecucion
      </Paper>
      <Paper className={classes.paper3}>
        <Typography variant="h6" component="h2">
          {props.time}
        </Typography>
      </Paper>
    </>
  );
}
