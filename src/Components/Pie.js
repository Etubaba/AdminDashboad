import {Doughnut} from 'react-chartjs-2'
import {useState,useEffect} from 'react'


function Pie() {

    const [pieChart,setPieChart]=useState({})

const pieDo=()=>{
    setPieChart({
        labels:['On delivery','Delivered','Cancelled'],
        datasets: [
            
            {
                label: ['On delivery','Delivered','Cancelled'],
                data: [ 50,30,20],
                backgroundColor:['red','#2CC055','#424446'],
                spacing: 2,
                
                
            }  
    ]

    })
}

useEffect(()=>{
    pieDo()
},[])





    return (
        <div style={{position:'relative', height:'10vh',width:'11vw'}}>
            <Doughnut data={pieChart} options={{
                
                responsive:true,
                maintainAspectRatio: true,
            }}/>
        </div>
    )
}

export default Pie
