import React, {useState} from "react";
import './PostCSS.css';

const NewPostForm = () => {

   // ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ useState and function for drop-down trigger ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤
   const [showForm, setShowForm] = useState(true)

   function handlePostForm() { 
       var postdd = document.querySelector('#AHHHH')
       postdd.classList.toggle('is-active')
      
   }
    // ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┬┴┬┴┬┴┬┴┬┴┬┤


return (


<>
<div id="background"
style={{width:"120vh"}}
>

{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ♥ Form for New Post (below) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
   
   
   {/* ʚ♥ɞ Start of dropdown for form ʚ♥ɞ */}
    
    <div class="dropdown is-hoverable" id="AHHHH"> 
    <div class="dropdown-trigger">
    <button class="button" onClick={handlePostForm}
    style={{fontFamily: "bold-font", position: "absolute", top:"-66px", left:"216px", fontSize:"25px", padding:"18px", height:"20px", width:"-10px"}}>

   
    <span>+</span>
    </button>
    </div>
    <div style={{position: "absolute", left:"10px", top:"17px", border:"3px solid black", width:"600px", borderRadius:"6px"}}
    class="dropdown-menu" id="new-post-form-dd" role="menu">
    <div class="dropdown-content">

     {/* ʚ♥ɞ Start of Form ʚ♥ɞ */}   
    <div class="dropdown-item">
    <p style={{fontFamily: "bold-font", fontSize:"25px"}}>Post Something Jeff!</p>
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
    style={{fontFamily:"bold-font"}}
    class="button">
    Post
    </button>
    </p>
    </div>
        


    </div>









      
    </div>
    </div>



                                
                                
                                

                              

                                

                                 
                          
      
  </div>
{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┤ */}
</div>
</>



)}
export default NewPostForm