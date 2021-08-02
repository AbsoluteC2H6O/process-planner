import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { AutoSizer, Column, Table } from "react-virtualized";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
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

// const sample = [
//   ["P", 4, 4, 10, 4],
//   ["P", 8, 8, 10, 6],
//   ["P", 9, 9, 1, 10],
//   ["P", 2, 1, 3, 12],
//   ["P", 3, 2, 5, 14],
//   ["P", 5, 3, 5, 16],
//   ["P", 12, 4, 10, 18],
//   ["P", 15, 4, 6, 4],
//   ["P", 17, 8, 3, 6],
//   ["P", 19, 9, 1, 10],
//   ["P", 1, 1, 10, 12],
//   ["P", 3, 2, 20, 14],
//   ["P", 5, 3, 10, 16],
//   ["P", 5, 4, 10, 18],
// ];
const sample = [];
function createData(
  id,
  processName,
  waitTime,
  ejecutionTime,
  bloquedTime,
  comingTime,
  ejecTime
) {
  return { id, processName, waitTime, ejecutionTime, bloquedTime, comingTime,ejecTime };
}

const rows = [];
const min = 1;
const max = 10;

for (let i = 0; i < 20; i += 1) {
  let con1 = Math.floor(Math.random() * (max - min)) + min;
  let con2 = Math.floor(Math.random() * (max - min)) + min;
  let con3 = Math.floor(Math.random() * (max - min)) + min;
  let con4 = Math.floor(Math.random() * (max - min)) + min;
  let con5 = 0;
  sample.push([`P${i+1}`, con1, con2, con3, con4,con5]);
}

for (let i = 0; i < 10; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];

  rows.push(createData(i, ...randomSelection));
}

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
export default function DataAleatoria() {
  const { height, width } = useWindowDimensions();
  //const classes = useStyles();

  const dispatch = useDispatch();
  React.useEffect(() => {
    // let data=
    // {
    //   data: rows,
    // }
    dispatch({ type: "dataselected", payload: rows });
  }, []);

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
            Data Aleatoria para simular
          </Typography>
          <Typography paragraph></Typography>
          <Paper
            style={{
              height: height - 400,
              width: width * 0.5,
              marginLeft: width * 0.1,
              marginRight: width * 0.1,
            }}
          >
            <VirtualizedTable
              rowCount={rows.length}
              rowGetter={({ index }) => rows[index]}
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
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
