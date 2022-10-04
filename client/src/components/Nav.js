import React, {useState} from "react";

const Nav = () => {
return (


<>
 <div id="Nav-wrapper"
 > 
   <nav class="navbar"
   style={{ backgroundColor:"#416E7C"}}
   role="navigation" aria-label="main navigation">
  <div class="navbar-brand"
  style={{paddingRight:"1px", width:"200px", height:"10px"}}
  >
    <a class="navbar-item" href="/">
      <img 
      style={{paddingLeft:"10px", paddingTop:"px", width:"200px", maxHeight:"200px"}}
      src="./navbarlogo.png"/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">

      <span aria-hidden="false"></span>
      <span aria-hidden="false"></span>
      <span aria-hidden="false"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start"
    style={{paddingLeft: "30px", paddingTop: "15px"}}
    >
      <a>

      <div class="control has-icons-right has-icons-right"
      >
        <input 
        style={{borderRadius: "4px", width:"100%", height:"25px"}}
        class="input is-small" type="search" placeholder="Search"/>
         <span class="icon is-small is-right">
         <i
         style={{paddingBottom:"2px", paddingRight:"7px"}}
         >
            <img 
            style={{width: "20px"}}
            src="./searchicon.png"/> 

         </i>
        </span>
        </div>
      </a>

      

     

  
  </div>

  <div class="navbar-end" 
  style={{position:"absolute", right:"130px", paddingTop:"4px"}}
    >
      <div class="navbar-item">
        <div class="buttons">
          <a  style={{borderRadius:"4px"}}
          class="button is-small">
           
            <strong>Login</strong>
          </a>
          <a 
          style={{backgroundColor: "#C6A44C", color:"#8D4900", borderRadius:"4px"}}
          class="button is-small is-primary">
            <strong>Sign up</strong>
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-item has-dropdown is-hoverable"
    style={{paddingTop: "4px", paddingRight:"60px"}}
    >
        <a className="navbar-item">
        <img src="./moreoptionsbutton.png"/>
        </a>

        <div class="navbar-dropdown is-right">
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