import React, {useState} from "react";

const Nav = () => {
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
        <input 
        style={{borderRadius: "4px", width:"700px",maxWidth:"120%", height:"27px", backgroundColor:"grey", border:"black 1px solid", color:"black"}}
        class="input is-small" type="search"/>
         <span>
         <i
         style={{paddingBottom:"3px"}}
         >
         

         </i>
        </span>
        </div>
      </a>

      

     

  
  </div>

  <div class="navbar-end" 
  style={{ paddingTop:"18px", paddingLeft:"200px"}}
    >
      <div class="navbar-item">
        <div class="buttons">
          <a  style={{borderRadius:"4px", backgroundColor:"transparent", color:"white", marginRight:"15px", padding:"10px", paddingTop:"5px"}}
          class="button is-small">
           
            <strong
            style={{fontFamily: "bold-font", fontSize: "19px", paddingTop:"4px"}}
            >Login</strong>
          </a>
          <a 
          style={{backgroundColor: "white", color:"black", borderRadius:"4px"}}
          class="button is-small is-primary">
            <strong
             style={{fontFamily: "bold-font", fontSize: "19px"}}
            
            >
              Sign up</strong>
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-item has-dropdown is-hoverable is-trigger"
    style={{paddingTop: "20px", paddingRight:"40px", backgroundColor: "transparent"}}
    >
        <a 
        style={{backgroundColor:"transparent"}}
        className="navbar-item">
        <img src="./invert.png"/>
        </a>

        <div class="navbar-dropdown is-right"
        style={{marginTop:"20px", marginRight:"20px", backgroundColor:"black", fontFamily:"regular-font", color:"white", border:"1px black solid", borderRadius:"7px"}}
        >
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
           Help
          </a>
          
      </div>
    </div>


  </div>
</nav>

</div>

</>



)}
export default Nav