import {Line} from 'react-chartjs-2'
import {useState,useEffect} from 'react'


function Linchart() {
    const [chartData,setChartData]=useState({})


   

    const chart=()=>{
        setChartData({
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [
                     {   
                        
                        label : 'Revenue',
                        data: [500, 300,600,500,700,400,600,500,700,400,800],
                        
                        backgroundColor:['rgba(75, 192,192,0.6)'],
                        borderWidth: 4
                     }
            ]
        })
    }

    useEffect(()=>{
        chart()
    },[])
    return (
        <div>
            <Line data={chartData} options={{
                responsive:true,
                scales:{
                    y:[
                        {
                            gridLines:{
                                display:false }
                        }
                    ]

                }
            }} />
        </div>
    )
}

export default Linchart
