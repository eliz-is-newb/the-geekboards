import React, {useState} from "react";
import '../boards/PostCSS.css';

const EditDeleteHistory = () => {
   // ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ useState and function for drop-down trigger ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤
   const [showForm, setShowForm] = useState(false)

   function handleHistoryGrid() { 
       var historydd = document.querySelector('#welp')
       historydd.classList.toggle('is-active')
      
   }
    // ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┬┴┬┴┬┴┬┴┬┴┬┤


return (


<>







{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Form for New Post (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
   
   
   {/* ʚ♥ɞ Start of dropdown for form ʚ♥ɞ */}
    <div class="dropdown-trigger">

    </div>
    <div class="dropdown is-hoverable" id="welp"> 
    
    <div 
    class="dropdown-menu" id="new-post-form-dd" role="menu">
    <div class="dropdown-content">

     {/* ʚ♥ɞ Start of Form ʚ♥ɞ */}   
    <div class="dropdown-item">
    <p style={{fontFamily: "bold-font", fontSize:"25px"}}>Post History (mapped info below... maybe?)</p>
    <p style={{fontFamily: "bold-font", fontSize:"15px"}}>Edit Something Marcus!</p>
    </div>
    <div class="dropdown-item">


    {/* ʚ♥ɞ Title */}
    <div class="field">       
    <input class="input" type="name" placeholder="Post Title:"/>
    <p class="control ">                         
    </p>
    </div>
    </div>

    <div class="dropdown-item">

    {/* ʚ♥ɞ Image */}
    <div class="field">        
    <input class="input" type="text" placeholder="Image SRC Link:"/>
    <p class="control ">
    </p>
    </div>
    </div>


    <div class="dropdown-item">

    {/* ʚ♥ɞ Body */}
    <div class="field">
    <input class="input textarea" type="text" placeholder="Body:"/>
    <p class="control ">
    </p>
    </div>
    </div>

    <div class="dropdown-item">

    {/* ʚ♥ɞ Form Submit Button */}
    <div class="field">
    <p class="control">
    <button 
    style={{fontFamily:"bold-font", width:"200px", marginLeft:"16px"}}
    class="button">
    Edit
    </button>
    </p>
    </div>
        
    <div class="dropdown-item">

    {/* ʚ♥ɞ Delete Button */}
    <div>
    <button className="button is-dark" style={{fontFamily: "bold-font", width: "200px"}}> Delete </button>
    </div>
    </div>


    </div>









      
    </div>
    </div>



                                
                                
                                

                              

                                

                                 
                          
      
 
{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┤ */}
</div>




</>



)}
export default EditDeleteHistory