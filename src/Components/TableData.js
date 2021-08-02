import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

import { AutoSizer, Column, Table } from "react-virtualized";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  table: {
    "& .ReactVirtualized__Table__headerRow": {
      flip: false,
      paddingRight: theme.direction === "rtl" ? "0 !important" : undefined,
    },
  },
  tableRow: {
    cursor: "pointer",
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: "initial",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper2: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 500,
    height: 600,
  },
}));
let process = {
  processName: "",
  waitTime: 0,
  bloquedTime: 0,
  ejecutionTime: 0,

  statusProcess: 0,
  comingTime: 0,
  ejecTime:0,
};
let sample = [];
function ModalData(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //const [currency, setCurrency] = React.useState("");
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };
  const dataselected = useSelector(state => state.dataselected);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange1 = (event) => {
   // setCurrency(event.target.value);
    process.processName = event.target.value;
    //  console.log("procees", process);
  };
  const handleChange2 = (event) => {
    //setCurrency(event.target.value);
    process.bloquedTime = event.target.value;
    //   console.log("procees", process);
  };
  const handleChange3 = (event) => {
    //setCurrency(event.target.value);
    process.ejecutionTime = event.target.value;
    //console.log("procees", process);
  };
  const handleChange4 = (event) => {
    //setCurrency(event.target.value);
    process.waitTime = event.target.value;
    //  console.log("procees", process);
  };
  const handleChange5 = (event) => {
   // setCurrency(event.target.value);
    process.comingTime = event.target.value;
    //  console.log("procees", process);
  };
  const handleButton = () => {
    props.setLoading(true);
   // sample.push(process);
   if(dataselected.length>0){
  // sample = dataselected;
     console.log("dataselecte mayor a vero antes",dataselected,sample);
     sample.push(process);
     dispatch({ type: "dataselected", payload: sample });
     console.log("dataselecte mayor a vero despuess",dataselected,sample);
     
   }else{
    sample.push(process);
    dispatch({ type: "dataselected", payload: sample });
    

   }
   
    //console.log("sample", sample);
    //props.setLoading(false);
    handleClose();
  };
  console.log("dataselecte mayor a vero antes",dataselected,sample);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ width: 170, marginBottom: 10, marginRight: 15 }}
      >
        Agregar Proceso
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Configurar proceso</h2>
            <p id="transition-modal-description">Rellenar datos</p>
            <form className={classes.root} noValidate autoComplete="off">
              {/* <TextField id="standard-basic" label="Standard" /> */}

              <Grid item sm={6} xs={6} md={6} style={{ marginLeft: 40 }}>
                <TextField
                  id="filled-basic"
                  label="Nombre del proceso"
                  variant="filled"
                  style={{ width: 300 }}
                  onChange={handleChange1}
                />
                <TextField
                type="number"
                  id="filled-basic"
                  label="Tiempo de bloqueo"
                  variant="filled"
                  style={{ width: 300 }}
                  onChange={handleChange2}
                />
                <TextField
                type="number"
                  id="filled-basic"
                  label="Tiempo de ejecucion"
                  variant="filled"
                  style={{ width: 300 }}
                  onChange={handleChange3}
                />
                <TextField
                type="number"
                  id="filled-basic"
                  label="Tiempo de espera"
                  variant="filled"
                  style={{ width: 300 }}
                  onChange={handleChange4}
                />
                <TextField
                type="number"
                  id="filled-basic"
                  label="Tiempo de llegada"
                  variant="filled"
                  style={{ width: 300 }}
                  onChange={handleChange5}
                />
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={handleButton}
                style={{ width: 170, marginTop: 80, marginLeft: 100 }}
              >
                Agregar
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } =
      this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit",
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

// function createData(id, name, tw, te, tb, tc) {
//   return { id, name, tw, te, tb, tc };
// }

// const rows = [];

// for (let i = 0; i < 200; i += 1) {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   rows.push(createData(i, ...randomSelection));
// }

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
export default function TableData() {
  const { height, width } = useWindowDimensions();
  //const classes = useStyles();
  const dataselected = useSelector((state) => state.dataselected);
 // console.log("data selected", dataselected);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={1} xs={1} md={1}></Grid>
        <Grid item sm={6} xs={6} md={6}>
          <Typography
            style={{
              width: width * 0.5,
              marginLeft: width * 0.1,
              marginRight: width * 0.1,
            }}
            variant="h6"
            component="h2"
          >
            Data para simular
          </Typography>
          <Typography paragraph></Typography>
          <Paper
            style={{
              height: height - 300,
              width: width * 0.5,
              marginLeft: width * 0.1,
              marginRight: width * 0.1,
            }}
          >
            {
            loading === false &&
           true
             ? (
              <VirtualizedTable
                rowCount={dataselected.length}
                rowGetter={({ index }) => dataselected[index]}
                columns={[
                  {
                    width: width * 0.25,
                    label: "Nombre",
                    dataKey: "processName",
                  },
                  {
                    width: width * 0.25,
                    label: "Tiempo de espera",
                    dataKey: "waitTime",
                    numeric: true,
                  },
                  {
                    width: width * 0.25,
                    label: "Tiempo de ejecucion",
                    dataKey: "ejecutionTime",
                    numeric: true,
                  },
                  {
                    width: width * 0.258,
                    label: "Tiempo de bloqueo",
                    dataKey: "bloquedTime",
                    numeric: true,
                  },
                  {
                    width: width * 0.25,
                    label: "Tiempo de llegada",
                    dataKey: "comingTime",
                    numeric: true,
                  },
                ]}
              />
            ) : (
              <></>
              // agregar loader
            )}
          </Paper>
        </Grid>

        <Grid item sm={2} xs={2} md={2}>
          <ModalData loading={loading} setLoading={setLoading} />
        </Grid>
      </Grid>
    </>
  );
}
