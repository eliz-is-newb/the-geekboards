import React, {useState} from "react";
import EditDeleteHistory from "./EditDeleteHistory";

const MapHistory = () => {

    const fakeArray = [1,2,3,4,5,6]



 // ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ useState and function for drop-down trigger ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤
 const [showForm, setShowForm] = useState(true)

 function handleDashDropDown() { 
     var data = document.querySelector('#shit')
     data.classList.toggle('is-active')
    
 }
  // ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┬┴┬┴┬┴┬┴┬┴┬┤


return (


<>


{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Map of all posts associated with user (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}


{/* maps idk  */}


{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Form for New Post (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
 
 
 {/* ʚ♥ɞ Start of dropdown for form ʚ♥ɞ */}
  
  <div class="dropdown is-hoverable" id="shit"> 
  <div class="dropdown-trigger">
  <button onClick={handleDashDropDown} style={{fontFamily: "bold-font", height:"25px", marginTop:"6px"}}
      className="button">Dashboard</button>
  </div>
  <div 
  class="dropdown-menu" id="new-post-form-dd" role="menu">
  <div class="dropdown-content">

   {/* ʚ♥ɞ Edit Form ʚ♥ɞ */}   
   {/* PUT THIS INSIDE THE MAP */}
  <EditDeleteHistory/>
  


  </div>









    
  </div>
  </div>



                              
                              
                              

                            

                              

                               
                        
    

{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┤ */}





</>



)}
export default MapHistory