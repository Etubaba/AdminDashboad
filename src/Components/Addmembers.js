import style from '../Styles/location.css'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import {useState} from 'react';
import Select from '@mui/material/Select';
function AddMember() {

    const [name,setName] =  useState('')
    const [email,setEmail] = useState('')
    const [role,setRole] =useState('')




    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ced4da',
          fontSize: 16,
          padding: '10px 26px 10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#0000',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            
          },
        },
      }));










      const onSubmit=(e)=>{
          e.preventDefault()

         setEmail('')
         setName('')
         setRole(null)
         
      }



    return (
        <div className='location'>
            <h2 class="heading">Add-<span class="color-text">Member</span></h2>
          <div class="Form-body">
        <form action="form.php" method="POST">
        <TextField
          label="Name"
          type='text'
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
          style={{width:'22vw',color:'white',marginBottom:'5vh'}}
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
<br/>

         <TextField
          label="Email"
          type='email'
          style={{width:'22vw'}}
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
<br/>
<FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Sub-Category</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={role}
          onChange={(e)=>setRole(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Manager'>Manager</MenuItem>
          <MenuItem value='Kitchen Cook'>Kitchen Cook</MenuItem>
          <MenuItem value='Kitchen admin'>Kitchen supervisor</MenuItem>
          <MenuItem value='Kitchen taster'>Kitchen Taster</MenuItem>
        </Select>
      </FormControl>





         
            {/* <button class="Form-btn" onClick={onSubmit}>Add </button> */}
            

            <Button variant="contained" onClick={onSubmit} >
           Create
            </Button>
     
        </form>
    </div>
        </div>
    )
}

export default AddMember