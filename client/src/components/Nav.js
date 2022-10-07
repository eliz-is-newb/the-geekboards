import React, {useState} from "react";
import NavSearchBar from "./NavSearchBar";
import LoginButton from "./LoginButton"; 
import SignUpButton from "./SignUpButton";
import Dashboard from "./Dashboard";

const Nav = () => {
   
  const [loggedIn, setLoggedIn] = useState(false) 
  const [loggedInDashboard, setLoggedInDashboard] = useState(true) 

  // ʚ♥ɞ Toggle this [true/false] to show the login/dashboard/logout in nav ^^^^ 
  
  function handleDropDown() { 
    var dropdown = document.querySelector('#faq')
    dropdown.classList.toggle('is-active')}

  const [hideSignUp, setHideSignUp] = useState(false)




return (


<>
 <div id="Nav-wrapper"
 > 
   <nav class="navbar"
   style={{ backgroundColor:"black", paddingBottom:"70px",paddingTop:"20px", maxHeight:"60px"}}
   role="navigation" aria-label="main navigation">
  <div class="navbar-brand"
  style={{paddingRight:"100px", width:"200px", maxHeight:"50px"}}
  >
    <a class="navbar-item" href="/">
      <p
      style={{paddingLeft:"41px",paddingTop:"0px", width:"400px", maxHeight:"300px", fontFamily:"bold-font", color:"white", fontSize:"25px",}}
      > The Geek Boards</p>
    </a>

  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start"
    style={{paddingLeft: "60px", width:"600px", paddingTop: "13px", fontFamily:"bold-font", display:"flex", justifyContent:"center"}}
    >
      <a>

      <div class="control"
      style={{paddingLeft:"20px", marginLeft:"225px", paddingRight:"20px"}}
      >
        {/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Here is where the ternary is for the navsearch bar ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}

        {loggedIn 
			?  <NavSearchBar />
			: null
		}
       
         <span>
         <i
         style={{paddingBottom:"3px"}}
         >
         

         </i>
        </span>
        </div>
      </a>

      

     

  
  </div>
 {/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Here is where the ternary is for dashboard/login & signup ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
  <div class="navbar-end" 
  style={{ paddingTop:"18px", paddingLeft:"200px"}}
    >
      <div class="navbar-item">
        <div class="buttons">
          {loggedInDashboard ? <Dashboard setLoggedInDashboard={setLoggedInDashboard}/>
           
         : [ <LoginButton />, <SignUpButton />]
  }


        </div>
      </div>
    </div>

    <div class="navbar-item has-dropdown is-trigger" id="faq" onClick={handleDropDown}
    style={{paddingTop: "18px", paddingRight:"20px", backgroundColor: "transparent"}}
    >
        <a 
        style={{backgroundColor:"transparent"}}
        className="navbar-item">
        <img src="./invert.png"/>
        </a>

        <div class="navbar-dropdown is-right"
        style={{marginTop:"50px", marginRight:"20px", backgroundColor:"white", fontFamily:"bold-font", color:"white", border:"1px white solid", borderRadius:"7px"}}
        >
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            What is 4Chan?
          </a>
          <a class="navbar-item">
           FAQ
          </a>
          
      </div>
    </div>


  </div>
</nav>

</div>

</>



)}
export default Nav