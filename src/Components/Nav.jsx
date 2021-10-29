import style from "../Styles/Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
//import chef from '../Styles/'
function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  return (
    <div className="body">
      <div class="nav-bar">
        <div class="navbar0"></div>
        <div class="navbar1">
          <form action="">
            <input type="text" name="search" placeholder="Search Here.." />
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div class="navbar2"></div>
        <div class="navbar3">
          <div class="icon">
            <i id="bell" class="far fa-bell"></i>
            <div class="bell numbers">
              <p>12</p>
            </div>
          </div>
          <div class="icon">
            <i id="chat" class="far fa-comment-alt"></i>
            <div class="chat numbers">
              <p>12</p>
            </div>
          </div>
          <div class="icon">
            <i id="gift" class="fas fa-gift"></i>
            <div class="gift numbers">
              <p>12</p>
            </div>
          </div>
          <div class="icon">
            <i id="cog" class="fas fa-cog"></i>
            <div class=" cog numbers">
              <p>!</p>
            </div>
          </div>
          <div class="welcome">
            <div class="on">
              <p>
                Hello, <strong>Abuja Kitchen</strong>
              </p>
              <div class="box">
                <i class="far fa-user"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" sidebar">
        <div class="sider0">
          <h2>WakaFoods</h2>
          <i class="fas fa-bars"></i>
          <a href="../"></a>
        </div>
        <div class=" side sider1">
          <div class="menu">
           <i class="fas fa-tachometer-alt" ></i>
            <p>
              <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
                Dashboard
              </Link>
            </p>
          </div>
        </div>
        <div class="side sider2">
          <i class="far fa-calendar-minus"></i>
          <div class="menu">
            <Link
              to="/orders"
              style={{ textDecoration: "none", color: "#333" }}
            >
              {" "}
              <p>Orders</p>
            </Link>
            <div class="num">
              <p>12</p>
            </div>
          </div>
        </div>
        <div id="sider" class="side sider3">
          <i class="far fa-list-alt"></i>
          <div onClick={() => setShowMenu(!showMenu)} class="menu">
            <p>Menus</p>
          </div>
          {!showMenu ? (
            <i
              onClick={() => setShowMenu(!showMenu)}
              id="drop1"
              class="fas fa-angle-right"
            ></i>
          ) : (
            <i
              onClick={() => setShowMenu(!showMenu)}
              id="drop2"
              class="fas fa-angle-down"
            ></i>
          )}
        </div>
        {showMenu ? (
          <div class="sub-menu" id="menus">
            <Link to="/catform" style={{ textDecoration: "none" }}>
              {" "}
              <li>Create Category</li>
            </Link>
            <Link to="/subcat">
              {" "}
              <li>Create Sub-Category</li>
            </Link>
            <Link to="/addfood">
              {" "}
              <li>Add Food</li>
            </Link>
          </div>
        ) : null}

        <div
          onClick={() => setShowCustomer(!showCustomer)}
          class="side sider3 sider4"
        >
          <i class="fas fa-users"></i>
          <div class="menu">
            <p>Kitchens</p>
          </div>
          {!showCustomer ? (
            <i
              onClick={() => setShowCustomer(!showCustomer)}
              id="drop3"
              class="fas fa-angle-right"
            ></i>
          ) : (
            <i
              onClick={() => setShowCustomer(!showCustomer)}
              id="drop4"
              class="fas fa-angle-down"
            ></i>
          )}
        </div>
        {showCustomer ? (
          <div class="sub-menu" id="customer">
            <li>
            <Link to='/addmembers' >Add-Member</Link>
            </li>
            <li>
             <Link to='/members' >Members</Link>
            </li>
          </div>
        ) : null}

        <div class="side sider3 sider4">
          <i class="far fa-compass"></i>
          <div onClick={() => setShowLocation(!showLocation)} class="menu">
            <p>Location</p>
          </div>
          {!showLocation ? (
            <i
              onClick={() => setShowLocation(!showLocation)}
              id="drop7"
              class="fas fa-angle-right"
            ></i>
          ) : (
            <i
              onClick={() => setShowLocation(!showLocation)}
              id="drop8"
              class="fas fa-angle-down"
            ></i>
          )}
        </div>
        {showLocation ? (
          <div class="sub-menu" id="location">
            <Link to="/addlocation">
              <li>Add New</li>
            </Link>
            <Link to="/locations">
              <li>Locations</li>
            </Link>
          </div>
        ) : null}
        <div class="side sider3 ">
          <i class="fas fa-chart-line"></i>
          <div class="menu">
            <p>Analysis</p>
          </div>
        </div>
        {showCustomer && showMenu || showLocation && showMenu || showLocation && showCustomer ? null : (
          <div class="icon-box">
            <img
               src="https://mcusercontent.com/500989ddbb1252dfed8f35378/images/48e760bc-2f99-2798-bc3e-c78cd61d4068.png"
              alt="icon" 
            />
            <p>Organize your menus through the button below</p>
            <a href="#">+Add Menus</a>
          </div>
        )}
        <div class="footer">
          <p>
            WakaFoods LTD.
            <br />© 2021 allright reserved
          </p>
        </div>
      </div>
    </div>
  );
}
//https://run.mocky.io/v3/c8fb7351-bb90-4e6b-b512-abd870e3c363
export default Nav;
