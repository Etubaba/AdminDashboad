import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,

    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#0000",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
const myStyle = {
  position: "relative",
  left: "30vw",
  top: "20vh",
  borderRadius: "5px",
  backgroundColor: "#EDA345",
  width: "40vw",
};

export default function CustomizedSelects() {
  const [subcat, setsubcat] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
 const onSubmit=(e)=>{
   e.preventdefault()
 }



  return (
    <div className="subcatform">
      <h2 class="heading">
        Add-<span class="color-text">Sub-category</span>
      </h2>
      <div style={myStyle}>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label">Category</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Waka-Naija">Waka-Naija</MenuItem>
            <MenuItem value="Waka-chinese">Waka-Chinese</MenuItem>
            <MenuItem value="Waka-congo">Waka-Congo</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-textbox">
            Sub-Category :
          </InputLabel>
          <BootstrapInput 
                  value={subcat}
                  onChange={(e) => setsubcat(e.target.value) }
                  id="demo-customized-textbox" />
        </FormControl>
        <Button
          variant="contained"
          onClick={onSubmit}
         style={{
            marginLeft: "1.6vw",
            position: "relative",
            top: "5vh",
            backgroundColor: "black",
          }}
        >
          Create
        </Button>

        {/* <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl> */}
      </div>
    </div>
  );
}
