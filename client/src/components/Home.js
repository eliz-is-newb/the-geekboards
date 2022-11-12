import React, {useState} from "react";
import '../medium.ttf';
import '../bold.ttf';
import '../regular.ttf';
const Home = () => {

return (


<>
 <div id="Page-wrapper"
 style={{
   fontFamily: "medium-font",
    height: "120vh",
    backgroundImage: "url(./background.png)",
    backgroundSize: "cover", 
  


 }}> 

<div style={{marginLeft: "200px", marginTop:"-40px", position:"absolute"}}>

    <div id="Banner-wrapper"
    style={{ marginLeft:"225px", paddingTop:"225px", width: "100%", display: "flex", justifyContent: "center",}}
    >
        <img 
        style={{position:"relative", top:"-84px", left:"-265px", width:"1100px"}}
        src="./banner.png" />
    </div>


{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ Where Our Boards Table Is :) ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}
            <div id="Boards-wrapper"
                style={{
                paddingTop:"90px", 
                marginLeft:"250px", 
                display:"flex", 
                justifyItems:"center", 
                width:"1000px"}}>
                                        {/*~~~~ ʚ♥ɞ Styling for title div ~~~~~~~*/}
                                                <div
                                                style={{
                                                position: "relative", 
                                                backgroundColor:"black", 
                                                border:"1px white solid", 
                                                top:"-130px", 
                                                paddingTop:"4px", 
                                                paddingRight:"2x",
                                                paddingBottom:"5px",
                                                paddingLeft: "19px",
                                                left: "-175px", 
                                                zIndex:"4",
                                                maxHeight:"48px",
                                                width:"120px",
                                                borderRadius: "6px", 
                                                color: "white",
                                                fontFamily: "bold-font",
                                                fontSize: "25px"
                                                }}>

                                        {/*~~~~ ʚ♥ɞ Static Title ~~~~~~~*/}
                                                
                                               <p>Boards</p> 

                                                </div>

                                        {/*~~~~ ʚ♥ɞ Styling for arrow ~~~~~~~*/}
                                                <div
                                                style={{ 
                                                width:"140px"
                                                }}>
                                                <img style={{
                                                    position: "relative", 
                                                    right:"265px", 
                                                    top:"-129px"}}
                                                src="./boards1.png"/>

                                        {/*~~~~ ʚ♥ɞ Styling for board categories ~~~~~~~*/}

                                            <div id="boards-dropdown-container"
                                            style={{ 
                                                display:"flex", 
                                                justifyItems:"center", 
                                                flexWrap:"wrap", 
                                                width:"100vw", 
                                                marginLeft:"-300px", 
                                                marginTop:"-100px",
                                                rowGap:"2rem"}}>
        

{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ Board tables!  ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}

       {/* ʚ♥ɞ japanese culture */}
        <div className="dropdown is-hoverable">
        <div class="dropdown-trigger">
            
            <button 
            style={{
                paddingTop:"28px", 
                paddingBottom:"28px", 
                paddingLeft:"15px", 
                paddingRight:"15px", 
                marginRight:"20px"}}

            class="button is-dark" 
            aria-haspopup="true" 
            aria-controls="dropdown-menu">
            <p style={{fontSize: "20px", fontFamily: "bold-font"}}
            >Japanese Culture</p>
            </button>

        </div>

                            <div class="dropdown-menu" 
                            style={{paddingTop: "15px"}}
                            id="dropdown-menu3" role="menu">
                            <div class="dropdown-content">

                    {/* ʚ♥ɞ Where we put the links !!!  (on the href="#" tag !!)*/}
                    
                        <a href="/board" class="dropdown-item"
                        style={{fontFamily: "medium-font", fontSize:"16px"}}
                        >
                        Anime & Manga
                        </a>
                        <a 
                        style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Memes
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        All Things Kawaii
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Anime Wallpaper 
                        </a>
                        <a 
                        style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Cosplay
                        </a>
                        <a 
                        style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Vtubers
                        </a>
                        </div>
                        </div>
                    </div>
                {/* ʚ♥ɞ end */}


                {/* ʚ♥ɞ Video Games */}
                <div className="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                            
                            <button 
                            style={{paddingTop:"27px", paddingBottom:"27px", paddingLeft:"20px", paddingRight:"25px", marginRight:"20px", marginTop:"1px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "20px", fontFamily: "bold-font"}}
                            >Video Games</strong>
                            </button>
                    </div>
                <div class="dropdown-menu"
                style={{paddingTop: "15px"}}
                id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Multiplayer
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Pokemon
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Smash
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        League of Legends
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Minecraft
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Valorant/Fortnite/Overwatch
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Retro Games
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Misc. 
                        </a>
                        </div>
                        </div>
                    </div>
                {/* Board, end */}
                <div></div>
                {/* Boards, Interests */}
                <div className="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                            
                            <button 
                            style={{paddingTop:"28px", paddingBottom:"28px", paddingLeft:"25px", paddingRight:"25px",  marginRight:"20px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "20px", fontFamily: "bold-font"}}
                            >Interests</strong>
                            </button>
                    </div>
                <div class="dropdown-menu" 
                 style={{paddingTop: "15px"}}
                id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Binge Watchers: TV & Movies 
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        True Crime
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Awww Animals
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Boxing/MMA
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Unboxing videos
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        ASMR Club
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Coding Friends
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Random 
                        </a>
                        </div>
                        </div>
                    </div>
                {/* Board, end */}
                <div></div>

                {/* Boards, Creative */}
                <div className="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                            
                            <button 
                            style={{paddingTop:"28px", paddingBottom:"28px", paddingLeft:"25px", paddingRight:"25px" , marginRight:"20px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "20px", fontFamily: "bold-font"}}
                            >Creative</strong>
                            </button>
                    </div>
                <div class="dropdown-menu" 
                 style={{paddingTop: "15px"}}
                id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Cooking
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Literature
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        DIY Music
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Fashion
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        TikTok
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Graphic Design
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Artwork
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Misc. 
                        </a>
                        </div>
                        </div>
                    </div>
                {/* Board, end */}

                <div></div>
                {/* Boards, Other */}
                <div className="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                            
                            <button 
                            style={{paddingTop:"28px", paddingBottom:"28px", paddingLeft:"15px" , marginRight:"20px", width:"120px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "20px", fontFamily: "bold-font"}}
                            >Other</strong>
                            </button>
                    </div>
                <div class="dropdown-menu" 
                 style={{paddingTop: "15px"}}
                id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Business
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Personal Finance Memes
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Current News
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Fitness
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Self Care
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Paranormal/Ghosts/Aliens
                        </a>
                        </div>
                        </div>
                    </div>
                {/* Board, end */}

                <div></div>
                {/* Boards, Music */}
                <div className="dropdown is-hoverable is-right">
                            <div class="dropdown-trigger">
                            
                            <button 
                            style={{paddingTop:"28px", paddingBottom:"28px", paddingLeft:"15px", marginRight:"15px", width:"120px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "20px", fontFamily: "bold-font"}}
                            >Music</strong>
                            </button>
                    </div>
                <div class="dropdown-menu"
                 style={{paddingTop: "15px", paddingRight:"20px"}}
                id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Hip-Hop
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Jazz
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Underground
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Hyperpop
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Top 40
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Indie/Emo/Punk
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        Rock/Metal
                        </a>
                        <a 
                         style={{fontFamily: "medium-font", fontSize:"16px"}}
                        href="#" class="dropdown-item">
                        EDM
                        </a>
                        </div>
                        </div>
                    </div>
                {/* Board, end */}


        </div>




        </div>
        </div>
{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┬┴┬┴┬┴┬┴┬┴┬┤ */}
    </div>

</div>

</>



)}
export default Home