import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";


import Menu from './MenuDot'
import { Link } from "react-router-dom";


const columns = [
  { id: "name", label: "Order ID", minWidth: 70 },
  { id: "code", label: "Date", minWidth: 70 },
  {
    id: "population",
    label: "Customer name",
    minWidth:70,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Location",
    minWidth:70,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Amount",
    minWidth:70,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth:70,
    align: "right",
    format: (value) => value.toFixed(2),
  },
 
];

let stat=['On delivery','Delivered', 'New order'];
         let status1=stat[Math.floor(Math.random()*stat.length)];
         let status2=stat[Math.floor(Math.random()*stat.length)]
         let status3=stat[Math.floor(Math.random()*stat.length)]


function createData(name, code, population, size, status) {
  
  return { name, code, population, size, status };
}

// const rows = [
//   createData("India", "IN", 1324171354, 3287263, 'New order'),//<Button variant='outlined'>{status1}</Button> ),
//   createData("China", "CN", 1403500365, 9596961,status3),
//   createData("Italy", "IT", 60483973, 301340,status1),
//   createData("United States", "US", 327167434, 9833520,status2),
//   createData("Canada", "CA", 37602203, 9984670, status3),
//   createData("Australia", "AU", 25475400, 7692024,status1),
//   createData("Germany", "DE", 83019200, 357578, status3),
//   createData("Ireland", "IE", 4857000, 70273, status2),
//   createData("Mexico", "MX", 126577691, 1972550,status1),
//   createData("Japan", "JP", 126317000, 377973,status3),
//   createData("France", "FR", 67022000, 640679,status1),
//];

export default function StickyHeadTable( props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
    
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
// const rows = props.apidata
//   console.log(rows)
   const rows = [
    createData('prosper', "IN", 1324171354, 3287263, 'New order'),//<Button variant='outlined'>{status1}</Button> ),
    createData("China", "CN", 1403500365, 9596961,status3),
    createData("Italy", "IT", 60483973, 301340,status1),
    createData("United States", "US", 327167434, 9833520,status2),
    createData("Canada", "CA", 37602203, 9984670, status3),
    createData("Australia", "AU", 25475400, 7692024,status1),
    createData("Germany", "DE", 83019200, 357578, status3),
    createData("Ireland", "IE", 4857000, 70273, status2),
    createData("Mexico", "MX", 126577691, 1972550,status1),
    createData("Japan", "JP", 126317000, 377973,status3),
    createData("France", "FR", 67022000, 640679,status1),]






  const myStyle = {
    Bodi: {
      position: "absolute",
      padding: 20,
      minWidth: "80vw",
      marginTop: "7%",
      left: "17%",
    },

    order: {
      position: "relative",
      left: "18vw",
      top: "14vh",
      fontSize: "0.1vw",
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    para: {
      fontSize: "1vw",
      fontFamily: ' Georgia, Times, "Times New Roman", serif',
      marginTop: "-2.6vh",
      color: "#c2c3c5",
    },
    double: {
      display: "flex",
      position: "absolute",
      top: "14vh",
      left: "70vw",
    },
    firstcon: {
      backgroundColor: "#f4f5f9",
      marginRight: "1vw",
      height: "7vh",
      width: "13vw",
      borderRadius: "8px",
      padding: "2vh",
      paddingBottom: "1.5vh",
    },
    secondcon: {
      backgroundColor: "#f4f5f9",
      height: "7vh",
      width: "13vw",
      borderRadius: "8px",
      padding: "2vh",
      paddingBottom: "1.5vh",
    },
    menu:{
       position:'relative',
       top:'1vh',
       right:'0.6vw',
       width: '5vw',
       marginLeft:'3vw',
       
    
    },
    view:{
      position : 'relative',
      top:'2vh',
      marginLeft:'3vw',
      
    }
  };
  

  return (
    <div>
      <div style={myStyle.order}>
        <h1>Orders</h1>
        <p style={myStyle.para}>Here is your order list data</p>
      </div>

      <div style={myStyle.double}>
        <span style={myStyle.firstcon}>
          <BoltOutlinedIcon style={{ marginRight: "0.6vw" }} />
          <span style={{ color: "black" }}>All Status</span>
          <i class="fas fa-angle-down" style={{ marginLeft: "3.5vh" }}></i>
        </span>
        <span style={myStyle.secondcon}>
          {" "}
          <CalendarTodayOutlinedIcon style={{ marginRight: "1vw" }} />
          <span style={{ color: "black" }}> Today </span>
          <i class="fas fa-angle-down" style={{ marginLeft: "4vh" }}></i>
        </span>
      </div>

      <div style={myStyle.Bodi}>
        <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: "20px" }}>
          <TableContainer sx={{ maxHeight: 700}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
                    
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ width:150 }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}

                            </TableCell>
                            
                            
                    
                        
                          );
                        })}
                        <div style={{display:'flex'}}>
                        <div style={myStyle.view} > 
                        <Link to='/order' style={{color:'black'}}><RemoveRedEyeIcon style={{fontSize:'17px'}}/></Link>
                        </div>
                        <div style={myStyle.menu} >
                        <Menu/>
                        </div>
                        </div>
                      </TableRow>
                      
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 200]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}
