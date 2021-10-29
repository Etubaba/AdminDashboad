import styles from "../Styles/Dashboard.css";
import { Line } from "react-chartjs-2";
import Linchart from "../Components/Linchart";
import Pie from "../Components/Pie";
import MonthChart from "../Components/MonthChart";
import GridViewIcon from "@mui/icons-material/GridView";
import {Progress} from 'antd'

function Dashboard() {
  const oders = [
    { id: "1", number: "25", status: "On delivery" },
    { id: "2", number: "10", status: "Delivered" },
    { id: "3", number: "15", status: "Canceled" },
  ];


  const progress={
    width:170,
    position: 'relative',
    left: '25vw',
    top:'9vh'
  }

  return (
    <div className="dashboard">
      <div>
        <div className="topleft">
          <h1>Dashboard</h1>
          <p>Welcome to Davur Admin !</p>
        </div>
        <div className="date">
          <div className="filter">
            <i className="far fa-calendar" id="dateicon"></i>
            <h4>
              <pre> Filter Period</pre>
            </h4>
          </div>
          <div className="datemain">
            <p> 4th June, 2020 - 4th July 2020 </p>
          </div>
        </div>

        <div className="fourbox">
          <div className="box1">
            <i className="fas fa-beer" id="inline"></i>
            <div className="lala">
              <h1>356</h1>
              <p>Total Menu</p>
              <span className="icongraph">
                <i className="fas fa-chart-line" id="smallicon"></i>{" "}
                <p>4% (30 days)</p>
              </span>
            </div>
          </div>
          <div className="box1">
            <i className="fas fa-dollar-sign" id="inline"></i>
            <div className="lala">
              <h1>126k</h1>
              <p>Total Revenue</p>
              <span className="icongraph">
                <i className="fas fa-chart-line" id="smallicon"></i>{" "}
                <p>4% (30 days)</p>
              </span>
            </div>
          </div>
          <div className="box1">
            <i className="far fa-list-alt" id="inline"></i>
            <div className="lala">
              <h1>279</h1>
              <p>Total Orders</p>
              <span className="icongraph">
                <i className="fas fa-chart-line" id="smallicon"></i>{" "}
                <p>4% (30 days)</p>
              </span>
            </div>
          </div>
          <div className="box1">
            <i className="fas fa-user-friends" id="inline"></i>
            <div className="lala">
              <h1>165</h1>
              <p>Total Customers</p>
              <span className="icongraph">
                <i className="fas fa-chart-line" id="smallicon"></i>{" "}
                <p>4% (30 days)</p>
              </span>
            </div>
          </div>
        </div>

        <div className="twobox">
          <div className="bigbox1">
            <div className="Container1">
              <h3>orders Summary</h3>
              <p>Lorem ipsum, dolor sit amet</p>

              <ul>
                <li>Monthly</li>
                <li>Weekly</li>
                <li> Today</li>
              </ul>
            </div>

            <div className="content">
              <ul>
                <li>25</li>
                <li>New Order</li>
                <li>Manage orders &nbsp; &nbsp;</li>
              </ul>
            </div>
            <div className="contentflex">
              {oders?.map((data) => (
                <div key={data.id} className="colo">
                  <h1>{data.number}</h1>
                  <p>{data.status}</p>
                </div>
              ))}
            </div>
            <div className="piechart">
              <Pie />
            </div>

    <div style={progress}> 
    <Progress percent={45} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
    <Progress percent={50} showInfo={true} />
  </div>



          </div>

          <div className="bigbox1">
            <div className="No">
              <h3>Revenue</h3>
              <p>lorm chdimed tus cun nus am folus</p>
            </div>

            <div className="yes">
              <p>
                {" "}
                Monthly &nbsp; &nbsp;{" "}
                <i className="fas fa-chevron-down" id="iconsmall"></i>
              </p>
            </div>
            <div className="under">
              <ul>
                <li>Income</li>
                <li> Expenses</li>
              </ul>
            </div>
            <div className="graph">
              <ul>
                <li>
                  <span className="graphicon">
                    <i className="fas fa-square-full" id="iconsmall"></i>{" "}
                    <p>Income</p>
                  </span>
                </li>
                <li>
                  <span className="graphicon">
                    <i
                      className="fas fa-square-full"
                      style={{ color: "purple" }}
                      id="iconsmall"
                    ></i>
                    <p>Expense</p>
                  </span>
                </li>
                <li>
                  <span className="graphicon">
                    <i className="fas fa-chart-bar" id="iconsmall"></i>
                    <h5 style={{ color: "black" }}>$126,000</h5>
                  </span>
                </li>
                <li>
                  <span className="graphicon">
                    <i
                      class="fas fa-chart-bar"
                      style={{ color: "purple" }}
                      id="iconsmall"
                    ></i>
                    <h5 style={{ color: "black" }}>$100,000</h5>
                  </span>
                </li>
              </ul>
            </div>

            <Linchart />
          </div>
        </div>
      </div>
      <div className="lastcontainer">
        <div className="last-content">
          <h3> Customer map</h3>
          <p>Lorem ipsum, dolor sit amet hfhfhf wsjjd</p>

          <ul>
            <li>Monthly</li>
            <li>Weekly</li>
            <li> Today</li>
          </ul>
        </div>

        <MonthChart />
      </div>

      <div className="layout">
        <GridViewIcon
          style={{
            position: "relative",
            top: "17vh",
            left: "5.5vh",
            fontSize: "3vw",
          }}
        />
        <div className="text">
          {" "}
          <h5>Manage </h5>
          <h5>Dashboard layout</h5>
        </div>
        <p>
          lorem ipsu sta muntulu sit tera <br /> mumtula
        </p>
        <i
          class="fas fa-arrow-right arrow"
          style={{ left: "17vw", position: "relative", top: "11vh" }}
        ></i>
      </div>
    </div>
  );
}

export default Dashboard;
