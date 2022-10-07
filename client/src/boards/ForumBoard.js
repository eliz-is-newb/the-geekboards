import React, {useState} from "react";
import'../medium.ttf';
import'../bold.ttf';
import'../regular.ttf';
import FormPosts from "./ForumPosts";
import './PostCSS.css';
import NewPostForm from "./NewPostForm";

const ForumBoard = () => {

    const fakeArray = [1,2,3,4,5,6]
return (

<>
<div id="page-background-wrapper"
style={{
    height: "120vh",
    width:"100%",
    backgroundImage: "url(./background.png)",
    backgroundSize: "cover", 
    backgroundRepeat: "repeat-x"

 }}>

<div id="page-elements-wrapper"
style={{display: "flex", justifyContent: "center", position: "relative",

 paddingTop:"48px",
 paddingLeft:"10px"  

 }}>

<div id="board-wrapper-3"
style={{
    
    height: "50px",
     paddingTop:"6px", borderRadius:"4px", left:"770px",

 }}>
  
    

<div id="board-title">
            <div style={{
                display:"flex", justifyContent:"center",
                width:"184px", marginLeft:"20px",
                paddingTop:"20px", paddingBottom:"20px", borderRadius:"10px",
                backgroundColor: "black", border:"white 2px solid",
                fontFamily:"bold-font",
                fontSize:"20px",
                color:"white",
            
                
                }}>
{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ name of the board goes here ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┴┬┤ */}
            <p>Anime & Manga</p> 
            
            </div>
{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┴┬┴┬┴┴┬┴┬┴┴┴┬┴┬┤ */}
           

                                {/* ├┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ button for add new post & post component goes here ├┬┴┬┴┬┴┴┬┤ */}
                                            
                                           
                                            <NewPostForm />

                                {/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┴┬┴┬┴┴┬┴┬┴┬┴┴┬┴┬┴┴┬┴┬┴┬┴┴┬┴┬┤ */}

</div>

            <div  style={{
                width: "90vw",
                display:"flex",
                flexWrap: "wrap",
                alignItems: "center",
                marginTop:"2rem"
            }}>
                {/* DEMO MAP OF ARRAY */}

                    {fakeArray.map(el=>(
                    <FormPosts />
                    ))}

            </div>
                       
<div id="board-comments">

<div id="board-likes"></div>

</div>

</div>

</div>
</div>



</>




)}
export default ForumBoard