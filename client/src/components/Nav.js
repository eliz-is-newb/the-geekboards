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
  style={{paddingRight:"1px", width:"200px", height:"80px"}}
  >
    <a class="navbar-item" href="/">
      <img 
      style={{paddingLeft:"20px", width:"300px", maxHeight:"200px"}}
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
    style={{paddingLeft: "120px", paddingTop: "15px"}}
    >
      <a class="navbar-item">

      <div class="control has-icons-right has-icons-right"
      >
        <input 
        style={{borderRadius: "4px", width:"100%"}}
        class="input is-small" type="search" placeholder="Search"/>
         <span class="icon is-small is-right">
         <i
         style={{paddingTop:"2px", paddingRight:"8px"}}
         >
            <img 
            style={{width: "25px"}}
            src="./searchicon.png"/> 

         </i>
        </span>
        </div>
      </a>

      

     

  
  </div>

  <div class="navbar-end" 
  style={{position:"absolute", right:"130px", paddingTop:"15px"}}
    >
      <div class="navbar-item">
        <div class="buttons">
          <a  style={{borderRadius:"4px"}}
          class="button is-normal">
           
            <strong>Login</strong>
          </a>
          <a 
          style={{backgroundColor: "#C6A44C", color:"#8D4900", borderRadius:"4px"}}
          class="button is-normal is-primary">
            <strong>Sign up</strong>
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-item has-dropdown is-hoverable"
    style={{paddingTop: "11px", paddingRight:"60px"}}
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