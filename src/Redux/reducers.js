import { combineReducers } from "redux";
import dataselected from "./dataselected";
import datalisto from "./datalisto";
import databloqueado from "./databloqueado";
import systemdata from "./systemdata";
export default combineReducers({
    dataselected:dataselected,
    datalisto:datalisto,
    databloqueado:databloqueado,
    systemdata:systemdata,
    
});
