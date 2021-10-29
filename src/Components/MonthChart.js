import {Bar} from 'react-chartjs-2'
import {useState,useEffect} from 'react'


function MonthChart() {
    const [chartData,setChartData]=useState({})


    const chart=()=>{
        setChartData({
            labels: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
            datasets: [
                     {
                        label : 'Customer map',
                        data: [,60,50,60, 45,57,60,58,45,60, 55,60,56, 34,56,45,53,56,37,45,51,55,60,46,45,60,35],
                        
                        backgroundColor:['#EDA345'],
                        borderWidth: 1
                     }
            ]
        })
    }

    useEffect(()=>{
        chart()
    },[])
    return (
        <div style={{position:'relative',width:'58vw' ,height:'4vh', marginTop:'-4vh'}}>
            <Bar data={chartData} height={'70vh'} options={{
                responsive:true,
                maintainAspectRatio: true,
                
            }
            }/>
        </div>
    )
}

export default MonthChart