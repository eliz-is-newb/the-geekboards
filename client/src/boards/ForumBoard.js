import React, {useState} from "react";
import'../medium.ttf';
import'../bold.ttf';
import'../regular.ttf';
import FormPosts from "./ForumPosts";

const ForumBoard = () => {

return (

<>
<div id="page-background-wrapper"
style={{
    height: "120vh",
    backgroundImage: "url(./background.png)",
    backgroundSize: "cover", 

 }}>

<div id="page-elements-wrapper"
style={{display: "flex", justifyContent: "center", position: "relative",

 paddingTop:"58px",
 paddingLeft:"20px"  

 }}>

<div id="board-wrapper-3"
style={{
    
    height: "50px", width:"850px",
     paddingTop:"6px", borderRadius:"4px", left:"770px",
    position:"absolute", top:"262px"

 }}>
    <div style={{

    height: "50px", width:"691px",
    backgroundColor: "white", paddingTop:"6px", borderRadius:"4px", left:"881px",
    position:"absolute", top:"-129px"
    }}>

        
    </div>

    <img 
    style={{position:"absolute", top:"-131px", right:"-12px", width:"60px", display:"inline-block", transform: "rotate(270deg)"}}
    
    src="./doublearrow.png"></img>

    
<br/>
<div id="board-title">
            <div style={{
                display:"flex", justifyContent:"center",
                position:"absolute", zIndex:"4", top:"-174px", right:"720px",
                width:"456px",
                paddingTop:"20px", paddingBottom:"20px", borderRadius:"10px",
                backgroundColor: "black", border:"white 3px solid",
                fontFamily:"bold-font",
                fontSize:"35px",
                color:"white",
            
                
                }}>
            
            Anime & Manga

            </div>




</div>

            <div id="board-background"
            style={{
                position:"absolute", top:"-39px", right:"-727px",
                height: "60px", width:"1900px", paddingTop:"1000px", borderRadius:"4px",
                backgroundColor: "white",
                
                }}>
                

            </div>
                        <div style={{position:"absolute", left:"-288px", display: "grid", flex:"row wrap" }}>

                        <div>
                            <FormPosts />
                        </div>


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