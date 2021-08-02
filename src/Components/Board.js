import React,{useEffect} from "react";

import AppBar3 from "./AppBar3";
import {useDispatch} from "react-redux";
export default function Board() {
 // const dataselected = useSelector(state => state.dataselected);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({type:"dataselected",payload:[]});
  }, []);
  return (
    <>
    {/* <AppBar2/> */}
    <AppBar3/>
    {/* <Container maxWidth="sm"> <Button variant="contained" color="primary">
    Planificador
      </Button></Container> */}
      {/* <Box color="text.primary" clone>
        <Button />
      </Box> */}
     
    </>
  );
}
