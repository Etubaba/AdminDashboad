
import style from './Styles/Nav.css'

import Nav from './Components/Nav'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard.jsx'
import Members from './Components/Members'
import Orders from './Components/Orders'
import Catform from './Components/Catform'
import Subcat from './Components/SubCat'
import Locations from './Components/Locations'
import AddLocation from './Components/AddLocation'
import OrderTable from './Components/OrderTable'
import AddFood from './Components/AddFood'
import AddMember from './Components/Addmembers'
import {useEffect, useState} from "react"
import axios from "axios"






function App() {

    const [product,setProduct]=useState([])
    const url = 'https://run.mocky.io/v3/d61e0b91-360d-4395-93d2-1c037d13c354';




    const fetchComments=async()=>{
        const response=await axios(url);
        setProduct(response.data)    
    }



    useEffect(() => {
        fetchComments();

    }, [])


//     useEffect(()=>{
// console.log(product)
//     },[product])
//     useEffect(() => {
//        axios.get(url)
//        .then( response=>{
//            setProduct(response.data)
//        })

//     }, [url])


// console.log(product)




    return (
<BrowserRouter>
        <div >
           <Nav/>
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/orders' component={OrderTable}> <OrderTable apidata={product}/> </Route>
                <Route path='/catform' component={Catform}/>
                <Route path='/members' component={Members}/>
                <Route path='/addmembers' component={AddMember}/>
                <Route path='/subcat' component ={Subcat} />
                <Route path='/addlocation' component ={AddLocation} />
                <Route path='/locations' component ={Locations} />
                <Route path='/order' component={Orders}/>
                <Route path='/addfood' component={AddFood}/>
            </Switch>

   
        </div>
</BrowserRouter>
        
    );
}

export default App;
