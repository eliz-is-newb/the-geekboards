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
   fontFamily: "good-chan font",
    height: "100vh",
    backgroundImage: "url(./background.png)",
    backgroundSize: "cover",

 }}
 > 

    <div id="Banner-wrapper"
    style={{ marginLeft:"631px", paddingTop:"185px", width: "1000px"}}
    >
        <img src="./banner.png" />
    </div>
    <div id="Boards-wrapper"

    >

        <div
        style={{marginLeft:"560px", width:"125px"}}
        >
        <img src="./boards1.png"/>

        <div id="boards-dropdown-container"
        style={{paddingTop:"30px", paddingLeft:"0px", display:"flex", width:"1000px", paddingRight:"100px",
                
    }}
        >

       {/* Boards, japanese culture */}
        <div className="dropdown is-hoverable">
             <div class="dropdown-trigger">
            
            <button 
            style={{paddingTop:"20px", paddingBottom:"20px", paddingLeft:"15px", marginRight:"15px"}}
            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <p
             style={{fontSize: "20px", fontFamily: "bold-font"}}
            >Japanese Culture</p>
            </button>
      </div>
                <div class="dropdown-menu" 
                 style={{paddingTop: "15px"}}
                id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a href="#" class="dropdown-item"
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
                            style={{paddingTop:"20px", paddingBottom:"20px", paddingLeft:"15px", marginRight:"15px"}}
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
                            style={{paddingTop:"20px", paddingBottom:"20px", paddingLeft:"15px" , marginRight:"15px"}}
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
                            style={{paddingTop:"20px", paddingBottom:"20px", paddingLeft:"15px" , marginRight:"15px"}}
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
                            style={{paddingTop:"20px", paddingBottom:"20px", paddingLeft:"15px" , marginRight:"15px", width:"120px"}}
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
                            style={{paddingTop:"20px", paddingBottom:"20px", paddingLeft:"15px", marginRight:"15px", width:"120px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "20px", fontFamily: "bold-font"}}
                            >Music</strong>
                            </button>
                    </div>
                <div class="dropdown-menu"
                 style={{paddingTop: "15px", paddingRight:"10px"}}
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