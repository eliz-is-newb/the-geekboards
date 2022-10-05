import React, {useState} from "react";
import './Home.css';
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
  
    

 }}
 > 

    <div id="Banner-wrapper"
    style={{ marginLeft:"225px", paddingTop:"175px", width: "900px", display: "flex", justifyContent: "center",}}
    >
        <img 
        style={{position:"absolute", top:"134px", left:"297px", width:"800px"}}
        src="./banner.png" />
    </div>
    <div id="Boards-wrapper"
 style={{paddingTop:"30px", paddingLeft:"211px", display:"flex", justifyItems:"center", width:"1000px"}}
    >

        <div
        style={{
            position: "absolute", 
            backgroundColor:"black", 
            border:"1px white solid", 
            top:"394px", 
            paddingTop:"4px", 
            paddingRight:"2x",
            paddingBottom:"5px",
            paddingLeft: "19px",
            left: "225px", 
            zIndex:"4", 
            width:"120px",
            borderRadius: "7px", 
            color: "white",
            fontFamily: "bold-font",
            fontSize: "25px"
        }}>
            Boards
        </div>
        <div
        style={{ width:"170px"}}
        >
        <img 
        style={{position: "relative", right:"-22px", top:"93px"}}
        src="./boards1.png"/>

        <div id="boards-dropdown-container"
        style={{paddingTop:"107px", display:"flex", justifyItems:"center", width:"1000px", paddingLeft:"12px"
    }}>

       {/* Boards, japanese culture */}
        <div className="dropdown is-hoverable">
             <div class="dropdown-trigger">
            
            <button 
            style={{paddingTop:"32px", paddingBottom:"32px", paddingLeft:"15px", paddingRight:"15px", marginRight:"20px"}}
            class="button is-dark" aria-haspopup="true" aria-controls="dropdown-menu">
            <p
             style={{fontSize: "23px", fontFamily: "bold-font"}}
            >Japanese Culture</p>
            </button>
      </div>
                <div class="dropdown-menu" 
                 style={{paddingTop: "15px"}}
                id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                    {/* Where we put the links !!!  (on the href="#" tag !!)*/}
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
                {/* Board, end */}
                <div></div>
                {/* Boards, Video Games */}
                <div className="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                            
                            <button 
                            style={{paddingTop:"32px", paddingBottom:"32px", paddingLeft:"25px", paddingRight:"25px", marginRight:"20px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "23px", fontFamily: "bold-font"}}
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
                            style={{paddingTop:"32px", paddingBottom:"32px", paddingLeft:"25px", paddingRight:"25px",  marginRight:"20px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "23px", fontFamily: "bold-font"}}
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
                            style={{paddingTop:"32px", paddingBottom:"32px", paddingLeft:"25px", paddingRight:"25px" , marginRight:"20px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "23px", fontFamily: "bold-font"}}
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
                            style={{paddingTop:"32px", paddingBottom:"32px", paddingLeft:"15px" , marginRight:"20px", width:"120px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "23px", fontFamily: "bold-font"}}
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
                            style={{paddingTop:"32px", paddingBottom:"32px", paddingLeft:"15px", marginRight:"15px", width:"120px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "23px", fontFamily: "bold-font"}}
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

</div>

</>



)}
export default Home