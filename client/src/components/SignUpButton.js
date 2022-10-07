import React, {useState} from "react";

const SignUpButton = () => {

// ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ useState and function for drop-down trigger ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤

    const [showForm, setShowForm] = useState(true)

    function handleDropDown3() { 
        var dropdown3 = document.querySelector('#signup')
        dropdown3.classList.toggle('is-active')
        setShowForm(prev =>!prev)
    }
// ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┬┴┬┴┬┴┬┴┬┴┬┤



return (


<>
<div 
    style={{marginLeft:"-20px", marginTop:"-20px", marginRight:"-40px"}}>

  
<div class="navbar-item has-dropdown is-trigger is-hoverable" id="signup" onClick={handleDropDown3}
    style={{paddingTop: "20px", paddingRight:"40px", backgroundColor: "transparent"}}
    >

<a  style={{borderRadius:"4px", border:"1px white solid", marginRight:"10px", padding:"14px", paddingTop:"px"}}
          class="button is-small">
           
            <strong
            style={{fontFamily: "bold-font", fontSize: "20px", paddingBottom:"2px",}}
            >Sign Up</strong>
          </a>


{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ Form for Sign Up (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}

        <div class="navbar-dropdown is-right"
        
                style={{
                padding:"2rem",
                paddingInline:"2rem",
                marginTop:"28px", 
                marginRight:"19px",
                height: "350px",
                width:"250px",
                backgroundColor:"white", 
                fontFamily:"bold-font", 
                color:"white", 
                borderTop:"none",
                border:"1px white solid",
                borderRadius:"7px"}}>


                                    {/* ʚ♥ɞ Start of Form ʚ♥ɞ */}
                                    

                                    {/* ʚ♥ɞ Username Input */}
                                    <div class="field">
                                    
                                    <input class="input is-light" type="username" placeholder="Create username"/>
                                    <p class="control ">
                                    
                                    </p>
                                    </div>


                                    {/* ʚ♥ɞ Email Input */}
                                    <div class="field">
                                    
                                    <input class="input is-light" type="email" placeholder="Enter Email"/>
                                    <p class="control ">
                                    
                                    </p>
                                    </div>


                                    {/* ʚ♥ɞ Password Input */}
                                    <div class="field">
                                    <p class="control">
                                    <input class="input is-light" type="password" placeholder="Choose Password"/>
                                    </p>
                                    </div>

                                     {/* ʚ♥ɞ Re-enter Password Input */}
                                     <div class="field">
                                    <p class="control">
                                    <input class="input is-light" type="password" placeholder="Re-enter Password"/>
                                    </p>
                                    </div>

                                     {/* ʚ♥ɞ Form Submit Button */}
                                    <div class="field">
                                    <p class="control">
                                    <button style={{fontFamily: "bold-font", fontSize:'20px', marginTop:"5px"}} class="button is-light">
                                    Sign Up! 
                                    </button>
                                    </p>
                                    </div>
          
      </div>
{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┤ */}

    </div> 
    </div>
</>



)}
export default SignUpButton