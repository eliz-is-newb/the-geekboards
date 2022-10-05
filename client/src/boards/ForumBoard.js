import React, {useState} from "react";
import'../medium.ttf';
import'../bold.ttf';
import'../regular.ttf';
import FormPosts from "./ForumPosts";

const ForumBoard = () => {

    const fakeArray = [1,2,3,4,5,7]
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

 paddingTop:"48px",
 paddingLeft:"10px"  

 }}>

<div id="board-wrapper-3"
style={{
    
    height: "50px",
     paddingTop:"6px", borderRadius:"4px", left:"770px",

 }}>
    {/* <div style={{

    height: "50px", width:"691px",
    backgroundColor: "white", paddingTop:"6px", borderRadius:"4px", left:"881px",
    position:"absolute", top:"-129px"
    }}>

        
    </div>

    <img 
    style={{position:"absolute", top:"-131px", right:"-12px", width:"60px", display:"inline-block", transform: "rotate(270deg)"}}
    
    src="./doublearrow.png"></img> */}

    

<div id="board-title">
            <div style={{
                display:"flex", justifyContent:"center",
                width:"184px",
                paddingTop:"20px", paddingBottom:"20px", borderRadius:"10px",
                backgroundColor: "black", border:"white 1px solid",
                fontFamily:"bold-font",
                fontSize:"20px",
                color:"white",
            
                
                }}>
            
            Anime & Manga

            </div>




</div>

            <div  style={{
                width: "90vw",
                display:"flex",
                flexWrap: "wrap",
                alignItems: "center",
                marginTop:"2rem"
            }}>
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