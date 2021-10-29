import Style from '../Styles/Cat.css'
import {useState} from 'react'

function Catform() {
    const [cat, setCat]=useState('')

    const onSubmit =(e)=>{
        e.preventdefault()

    }



    return (
        <div>
             <div class="Form-body1 container">
        
        <form >
           {/* <div class="pen ">
            <label class="abc ">Select category</label>
            <select class="select">
              <option value="1" class="waka">WAKA NAIJA</option>
              <option value="2" class="waka">WAKA CONGO</option>
              <option value="3" class="waka">WAKA CHINESE</option>
              <option value="4" class="waka">WAKA MALAY</option>
              <option value="5" class="waka">WAKA IRAQ</option>
              
            </select>
          </div>
<br/> */}
            <div class="input-container">
                <label class="abc">Category:</label>
            
                <input 
                        value={cat}
                        onChange={(e)=>setCat(e.target.value)}
                        class="main-input form-input form-control" 
                        type="text" 
                        placeholder="Enter Category" 
                        name="Location" required/>
            </div>
            
            <button class="Form-btn btn"    onClick={onSubmit}   >SUBMIT</button>
        </form>
    </div>
        </div>
    )
}

export default Catform
