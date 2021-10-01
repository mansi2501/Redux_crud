import React, {useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers, deleteUser } from '../redux/Actions/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useHistory } from 'react-router';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const useStyles = makeStyles({
      table: {
          marginTop: 50,
          minWidth: 900
      },
      button: {
          marginTop: 50
      }
  });

const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.data);
    const history = useHistory();

    useEffect(()=>{
      dispatch(loadUsers())
    },[])

    const deleteHandler = id => {
        if(window.confirm("Ary you sure you want to delete?"))
        {
          dispatch(deleteUser(id))
        }
    }

    return (
        <div>
            <div className={classes.button}>
              <Button color="primary" variant="outlined" onClick={()=> history.push("/addUser")}>
                Add User
              </Button>
            </div>

            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                      <StyledTableCell align="center" className="text-bold">Name</StyledTableCell>
                      <StyledTableCell align="center">Username</StyledTableCell>
                      <StyledTableCell align="center">Email</StyledTableCell>
                      <StyledTableCell align="center">City</StyledTableCell>
                      <StyledTableCell align="center">Phone</StyledTableCell>
                      <StyledTableCell align="center">Website</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users.map((user) => (
                    <StyledTableRow key={user.id}>
                        <StyledTableCell align="center">{user.name}</StyledTableCell>
                        <StyledTableCell align="center">{user.username}</StyledTableCell>
                        <StyledTableCell align="center">{user.email}</StyledTableCell>
                        <StyledTableCell align="center">{user.city}</StyledTableCell>
                        <StyledTableCell align="center">{user.phone}</StyledTableCell>
                        <StyledTableCell align="center">{user.website}</StyledTableCell>
                        <StyledTableCell align="center">
                          <Button color="success" onClick={()=> history.push(`/edituser/${user.id}`)}>
                            <ModeEditOutlineIcon />
                          </Button>
                          <Button color="error" onClick={()=> deleteHandler(user.id)}>
                            <DeleteIcon />
                          </Button>
                        </StyledTableCell>
                    </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default Home
