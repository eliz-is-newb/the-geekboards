import React, {useState} from "react";
import'../medium.ttf';
import'../bold.ttf';
import'../regular.ttf';

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

<div id="board-nav-links-wrapper"
style={{
    
    height: "50px", width:"850px",
     paddingTop:"5,6px", borderRadius:"4px", left:"770px",
    position:"absolute", top:"262px"

 }}>
    <div style={{

    height: "50px", width:"691px",
    backgroundColor: "white", paddingTop:"6px", borderRadius:"4px", left:"482px",
    position:"absolute", top:"18px"
    }}>

        
    </div>

    <img 
    style={{position:"absolute", top:"14xpx", right:"390px", width:"60px", display:"inline-block", transform: "rotate(270deg)"}}
    
    src="./doublearrow.png"></img>

    
<br/>
<div id="board-title">
<div style={{
    display:"flex", justifyContent:"center",
    position:"absolute", zIndex:"4", top:"-20px", right:"720px",
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

<div id="board-wrapper"
style={{ display:"flex", display:"inline-block",}}
>
<div id="board-posts">
<div style={{
    position:"absolute", top:"100px", right:"-327px",
    height: "60px", width:"1500px", paddingTop:"700px", borderRadius:"4px",
    backgroundColor: "white"

 }}>

</div>

<div id="board-comments">

<div id="board-likes"></div>

</div>

</div>

</div>
</div>
</div>
</div>

</>




)}
export default ForumBoard