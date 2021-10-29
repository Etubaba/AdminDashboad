
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { color } from '@mui/system';

const columns = [
  { id: 'name', label: 'Staff-ID', minWidth: 380 },
  { id: 'code', label: 'Name', minWidth: 270 },
  {
    id: 'population',
    label: 'Role',
    minWidth: 270,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  
  

];

const myStyle = {
  Bodi: {
    position: "absolute",
    padding: 20,
    minWidth: "80vw",
    marginTop: "7%",
    left: "17%",
  },
  tableHead:{
    position: 'relative',
    top: '1vh'
  },
  menu:{
    position:'relative',
    top:'1.7vh',
    right:'0.6vw',
    width: '5vw',
    marginLeft:'3vw',
    fontSize:'17px',
    color:'red'
  },
  view:{
    position : 'relative',
    top:'2vh',
    marginLeft:'3vw',
    fontSize:'17px'
  }
}
function createData(name, code, population, size) {
  
  return { name, code, population, size,};
}

const rows = [
  createData('0001', 'Godknows Egi', 'Manager', 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),

];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={myStyle.Bodi}>
    <Paper sx={{ width: '100%',borderRadius: "13px" }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead> 
          <TableRow style={myStyle.tableHead}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth }}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    
                   <div style={{display:'flex'}}>
                      <div style={myStyle.view}>
                         <EditIcon/>
                      </div>
                      <div style={myStyle.menu}>
                         <HighlightOffIcon/>
                     </div>
                   </div>   
                      
                
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}




