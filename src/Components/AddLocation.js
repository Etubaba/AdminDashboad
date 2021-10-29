import style from '../Styles/location.css'
import {useState} from 'react'
function AddLocation() {

    const [location,setLocation] =  useState('')
    const [delivery,setDelivery] = useState(false)
    const [pickUp,setPickUp] =useState(false)

      const onSubmit=(e)=>{
          e.preventDefault()
      }



    return (
        <div className='location'>
            <h2 class="heading">Add-<span class="color-text">Location</span></h2>
          <div class="Form-body">
        <form action="form.php" method="POST">
            <div class="input-container">
                <label>Location</label>
                <br/>
                <input value={location} onChange={(e)=>setLocation(e.target.value)} class="main-input" type="text" placeholder="Enter Location" name="Location" required />
            </div>
         <pre> <input type="checkbox" value={pickUp} checked={pickUp} onChange={(e)=>setPickUp(e.currentTarget.checked)}/> Enable for Pickup?</pre> 
         <br/>
         <pre> <input type="checkbox" value={delivery} checked={delivery} onChange={(e)=>setDelivery(e.currentTarget.checked)} /> Enable for Delivery?</pre> 
            <button class="Form-btn" onClick={onSubmit}>CREATE</button>
        </form>
    </div>
        </div>
    )
}

export default AddLocation
