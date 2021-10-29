//import '../Styles/Orders.css'
import Tabledata from "./Tabledata.jsx";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Orders() {
  
  const buttonStyle = {
    position: "relative",
    left: "-1vw",
    top: "-5vh",
  };
//   useEffect(() => {
//            axios.get(url)
// //.then(response=>response.Json())
//            .then( response=>{
//                setProduct(response.data)
//            })
    
//         }, [url])
    
    
//     console.log(product)

// useEffect(()=>{
   
//   fetch(url)
//   .then(res=>res.json())
//   .then(data=>setProduct(data.res))
// },[url])





// useEffect(async () => {
//   const fetchData = async () => {
//   const result = await axios(url);

//   setProduct(result.data);
//   }
//   fetchData();
// } ,[url]);



// console.log(product);


  return (
    <div className="fad3">
      <Link to="/orders">
        <Button style={buttonStyle} variant="text">
          <KeyboardBackspaceIcon />
          Back
        </Button>
      </Link>
      
      <h3>Order ID:</h3>
      <p>
        <span>Orders/</span>&nbsp;Order Details
      </p>
      <div className="main-body">
        {/* left widget   */}
        <div className="left-widget">
          <div id="white">
            <div id="img-circle">
              <i className="fas fa-user"></i>
            </div>
            <h5>John Dow Peter</h5>
            <button id="botn">Customer</button>
          </div>
          <div id="black">
            <h5>Note Order</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis numquam sint illo,{" "}
            </p>
          </div>
          <div id="red">
            <div id="img-circle2">
              <i className="fas fa-truck"></i>
            </div>
            <div>
              <p>No.4 st. Johnson park London</p>
            </div>
          </div>
          {/* second widget delivery stages */}
          <div className="left-widget-second">
            <div className="second-widget">
              <div className="dot">
                <i className="fas fa-circle"></i>
              </div>
              <div>
                <h6>Order Delivered</h6>
                <small> ----</small>
              </div>
            </div>
            <hr className="line" />
            <div className="second-widget">
              <div className="dot">
                <span>
                  <i className="fas fa-circle"></i>{" "}
                </span>
              </div>
              <div>
                <h6>On Delivery</h6>
                <small>Saturday 12th 2020</small>
              </div>
            </div>
            <hr className="line" />
            <div className="second-widget">
              <div className="dot">
                <span>
                  <i className="fas fa-circle"></i>{" "}
                </span>
              </div>
              <div>
                <h6>Payment Success</h6>
                <small>Friday 11th 2020</small>
              </div>
            </div>
            <hr className="line" />
            <div className="second-widget">
              <div className="dot">
                <span>
                  <i className="fas fa-circle"></i>{" "}
                </span>
              </div>
              <div>
                <h6>Order Created</h6>
                <small>Thursday 10th 2020</small>
              </div>
            </div>
          </div>
        </div>
        {/* right widget with tables */}
        <div className="right-widget">
          <Tabledata />

          {/* tracking order  */}
          <div className="third-widget">
            <div>
              <img
                src="https://photos5.appleinsider.com/gallery/33995-60690-aehea-l.jpg"
                alt=""
              />
              <div id="indicator">
                <i id="map" className="fas fa-comment-alt"></i>
                <h5>45mins</h5>
              </div>
            </div>
            <br />
            <h4>Delivered By</h4>
            <div id="food-img" className="footer-details">
              <div className="small-box">
                <div className="img-circle3">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <p> Kent Jnr.</p>
                  <small>ID #453998</small>
                </div>
              </div>
              <div className="small-box">
                <div className="img-circle3">
                  <i className="fas fa-phone-square-alt"></i>
                </div>
                <div>
                  <small>Telephone</small>
                  <p>+234 080-4457-99</p>
                </div>
              </div>
              <div className="small-box">
                <div className="img-circle3">
                  <i className="fas fa-truck"></i>
                </div>
                <div>
                  <small>Delivery Time</small>
                  <p>12:45 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
