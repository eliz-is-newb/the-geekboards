import React, {useState} from "react";
import'../medium.ttf';
import'../bold.ttf';
import'../regular.ttf';
import './PostCSS.css';

const FormPosts = () => {

return (



<>

<div
class="zoom"
style={{
    fontFamily:"bold-font",
    borderRadius: "7px",
    padding:"3rem",
    width:"60vw",
    maxWidth:"400px",
    maxHeight:"300px",
    backgroundColor: "white",
    margin: "1.2rem",
    border:"4px black solid",
    overflow: "scroll"
    }}
>
{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┤ᴥ•ʔっ Where the deconstructed values go { POSTS PREVIEW } ! ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┤ */}

<div className="title-and-image">

<div className="align-label">

{/* ʚ♥ɞ Username  */}
<p className="username-label">NotbillClinton123</p>
</div>

{/* ʚ♥ɞ Post Title  */}
<p className="post-title-size">This is a sample title</p>
{/* <img className="max-size" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5493558-6af8-47f7-8df7-0a5a6dd3f126/d7foeps-4ce4d231-354b-414e-857a-3d6cf3d1c103.jpg/v1/fill/w_1600,h_2631,q_75,strp/toshino_kyoko_tomato__yuru_yuri____vector___ipa_by_iljasperfectart_d7foeps-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjYzMSIsInBhdGgiOiJcL2ZcL2Y1NDkzNTU4LTZhZjgtNDdmNy04ZGY3LTBhNWE2ZGQzZjEyNlwvZDdmb2Vwcy00Y2U0ZDIzMS0zNTRiLTQxNGUtODU3YS0zZDZjZjNkMWMxMDMuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BP6EL7DRb2edUKQOx9u-sdaLE6pPQX-A2HLmDUPgv1s" />  */}

{/* ʚ♥ɞ Image URL  */}
<img className="max-size" src="https://i.pinimg.com/736x/ed/89/23/ed8923c4183b8fbe998d1f755d2a0530--yuru-yuri-anime.jpg" /> 

</div>    



{/* ├┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┴┬┬┬┴┬┴┬┴┬┴┬┴┬┤ */}
</div>








</>


)}
export default FormPosts