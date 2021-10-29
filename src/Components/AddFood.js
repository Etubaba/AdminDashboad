import * as React from 'react';
import style from '../Styles/Addfood.css'
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { height } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize'


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
const myStyle={
                position:'relative',
                left: '25vw', top: '20vh', 
                borderRadius: '5px',
                backgroundColor:'#EDA345',
                width:'60vw',
                marginTop:'-6%',
                height: '45vh'
            }

const container ={

  height: '30vh',
  width:' 15vw',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  position: 'relative',
  left: '5%',
  top:'-27vh' ,
  alignItems: 'center',
  justifyContent: 'center'

}




const url = "https://www.linkpicture.com/q/imgfood.jpg"




export default function CustomizedSelects() {
  const [category, setCategory] = React.useState('');
  const [subCategory, setSubCategory] = React.useState('');
  const [iconImg,setIconImg]=React.useState(url);
  const [foodName,setFoodName]=React.useState('')
  const [price,setPrice]=React.useState('')
  const [des,setDes]= React.useState('')





const onSubmit =(e)=>{
e.preventdefault()
// setFoodName('')
// setPrice('')
// setDes('')
// setSubCategory('')
// setCategory('')
}


 const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setIconImg( reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  const handleChangeSub = (event) => {
    setSubCategory(event.target.value);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className='subcatform'>
      <h2 class="heading">Add-<span class="color-text">Food</span></h2>
    <div style={myStyle}>
     <form > 
        <div style={{position:'relative',left:'35%'}}>
<FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Category</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={category}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Waka-Naija'>Waka-Naija</MenuItem>
          <MenuItem value='Waka-Chinese'>Waka-Chinese</MenuItem>
          <MenuItem value='Waka-Congo'>Waka-Congo</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Sub-Category</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={subCategory}
          onChange={handleChangeSub}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='pasteries'>Pasteries</MenuItem>
          <MenuItem value='Swallow'>Swallow</MenuItem>
          <MenuItem value='cereal'>Cereal</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Food Name :</InputLabel>
        <BootstrapInput placeholder='Food name' value={foodName} id="demo-customized-textbox" onChange={(e)=>setFoodName(e.target.value)} />
        
      </FormControl>
      <br/>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Price:</InputLabel>
        <BootstrapInput style={{width:'7vw'}} type='number' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Price' id="demo-customized-textbox" />
        
      </FormControl>
      <TextareaAutosize
                  aria-label="minimum height"
                  minRows={2}
                  value={des}
                  onChange={(e)=>setDes(e.target.value)}
                  placeholder="Add brief Description"
                  style={{ width: 200 ,marginTop:'5vh'}}
        />
      
      </div>
      <div style={container}>
					{/* <h6 className="heading">Add your Image</h6> */}
					<div className="img-holder">
						<img src={iconImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
					<AddAPhotoIcon/>
						Add food Photo
		    </label>
          </div>
		</div>





       

            <Button variant="contained" onSubmit={onSubmit}  style={{ marginLeft:"1.6vw",position:'relative',left:'84%', top:'-23vh' ,backgroundColor:'black'}}>
           Create
            </Button>
     
          
          </form>
    </div>
    </div>
  );
}

