import React, {useState} from "react";

const Home = () => {

return (


<>
 <div id="Page-wrapper"
 style={{
   
    height: "100vh",
    backgroundImage: "url(./background.png)",
    backgroundSize: "cover",

 }}
 > 

    <div id="Banner-wrapper"
    style={{ marginLeft:"200px", paddingTop:"100px"}}
    >
        <img src="./banner.png" />
    </div>
    <div id="Boards-wrapper"

    >

        <div
        style={{marginLeft:"200px", width:"220px"}}
        >
        <img src="./boards1.png"/>

        <div id="boards-dropdown-container"
        style={{paddingTop:"30px", paddingLeft:"0px", display:"flex", width:"1000px", paddingRight:"100px"}}
        >

       {/* Boards, japanese culture */}
        <div className="dropdown is-hoverable">
             <div class="dropdown-trigger">
            
            <button 
            style={{paddingTop:"35px", paddingBottom:"35px", paddingLeft:"15px", marginRight:"15px"}}
            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <strong
             style={{fontSize: "25px"}}
            >Japanese Culture</strong>
            </button>
      </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                        Anime & Manga
                        </a>
                        <a href="#" class="dropdown-item">
                        Memes
                        </a>
                        <a href="#" class="dropdown-item">
                        All Things Kawaii
                        </a>
                        <a href="#" class="dropdown-item">
                        Anime Wallpaper 
                        </a>
                        <a href="#" class="dropdown-item">
                        Cosplay
                        </a>
                        <a href="#" class="dropdown-item">
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
                            style={{paddingTop:"35px", paddingBottom:"35px", paddingLeft:"15px", marginRight:"15px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "25px"}}
                            >Video Games</strong>
                            </button>
                    </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                        Multiplayer
                        </a>
                        <a href="#" class="dropdown-item">
                        Pokemon
                        </a>
                        <a href="#" class="dropdown-item">
                        Smash
                        </a>
                        <a href="#" class="dropdown-item">
                        League of Legends
                        </a>
                        <a href="#" class="dropdown-item">
                        Minecraft
                        </a>
                        <a href="#" class="dropdown-item">
                        Valorant/Fortnite/Overwatch
                        </a>
                        <a href="#" class="dropdown-item">
                        Retro Games
                        </a>
                        <a href="#" class="dropdown-item">
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
                            style={{paddingTop:"35px", paddingBottom:"35px", paddingLeft:"15px" , marginRight:"15px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "25px"}}
                            >Interests</strong>
                            </button>
                    </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                        Binge Watchers: TV & Movies 
                        </a>
                        <a href="#" class="dropdown-item">
                        True Crime
                        </a>
                        <a href="#" class="dropdown-item">
                        Awww Animals
                        </a>
                        <a href="#" class="dropdown-item">
                        Boxing/MMA
                        </a>
                        <a href="#" class="dropdown-item">
                        Unboxing videos
                        </a>
                        <a href="#" class="dropdown-item">
                        ASMR Club
                        </a>
                        <a href="#" class="dropdown-item">
                        Coding Friends
                        </a>
                        <a href="#" class="dropdown-item">
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
                            style={{paddingTop:"35px", paddingBottom:"35px", paddingLeft:"15px" , marginRight:"15px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "25px"}}
                            >Creative</strong>
                            </button>
                    </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                        Cooking
                        </a>
                        <a href="#" class="dropdown-item">
                        Literature
                        </a>
                        <a href="#" class="dropdown-item">
                        DIY Music
                        </a>
                        <a href="#" class="dropdown-item">
                        Fashion
                        </a>
                        <a href="#" class="dropdown-item">
                        TikTok
                        </a>
                        <a href="#" class="dropdown-item">
                        Graphic Design
                        </a>
                        <a href="#" class="dropdown-item">
                        Artwork
                        </a>
                        <a href="#" class="dropdown-item">
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
                            style={{paddingTop:"35px", paddingBottom:"35px", paddingLeft:"15px" , marginRight:"15px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "25px"}}
                            >Other</strong>
                            </button>
                    </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                        Business
                        </a>
                        <a href="#" class="dropdown-item">
                        Personal Finance Memes
                        </a>
                        <a href="#" class="dropdown-item">
                        Current News
                        </a>
                        <a href="#" class="dropdown-item">
                        Fitness
                        </a>
                        <a href="#" class="dropdown-item">
                        Self Care
                        </a>
                        <a href="#" class="dropdown-item">
                        Paranormal/Ghosts/Aliens
                        </a>
                        </div>
                        </div>
                    </div>
                {/* Board, end */}

                <div></div>
                {/* Boards, Music */}
                <div className="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                            
                            <button 
                            style={{paddingTop:"35px", paddingBottom:"35px", paddingLeft:"15px", marginRight:"15px"}}
                            class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <strong
                            style={{fontSize: "25px"}}
                            >Music</strong>
                            </button>
                    </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                        Hip-Hop
                        </a>
                        <a href="#" class="dropdown-item">
                        Jazz
                        </a>
                        <a href="#" class="dropdown-item">
                        Underground
                        </a>
                        <a href="#" class="dropdown-item">
                        Hyperpop
                        </a>
                        <a href="#" class="dropdown-item">
                        Top 40
                        </a>
                        <a href="#" class="dropdown-item">
                        Indie/Emo/Punk
                        </a>
                        <a href="#" class="dropdown-item">
                        Rock/Metal
                        </a>
                        <a href="#" class="dropdown-item">
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