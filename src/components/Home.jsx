import React from "react";
import vg from "../assets/ww.svg"
import {AiFillGoogleCircle, AiFillAmazonCircle , AiFillYoutube , AiFillInstagram} from  "react-icons/ai"
const Home = () => {
  return (
  <>
  
  <div className="home" id ="home">
    <main>
        <h1>Technostar</h1>
        <p>The great growling engine of change – technology</p>


    </main>
  </div>


  <div className="home2">

    <img src = {vg} alt = "Graphics"/>

    <div>
        <p>Problem solving is the act of defining a problem; determining the cause of the problem; identifying, prioritizing, and selecting alternatives for a solution and implementing a solution.</p>
    </div>
  </div>

  <div className="home3" id ="about">

    <div><h1>Who we are?</h1>
    <p>Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.The word technology may also mean the product of such an endeavor. The use of technology is widely prevalent in medicine, science, industry, communication, transportation, and daily life.</p></div>
  </div>


  <div className="home4" id="brands">
    <div>
        <h1> Brands </h1>
        <article>
            <div style = {{ animationDelay:"0.3s"}}> 
        <AiFillGoogleCircle />
        <p>Google</p>
        </div>
        


<div style = {{ animationDelay:"0.5s"}}> 
        <AiFillAmazonCircle />
        <p>Amazon</p>
        </div>

<div style = {{ animationDelay:"0.7s"}}> 
        <AiFillYoutube />
        <p>Youtube</p>
        </div>




        <div style = {{ animationDelay:"1s"}}> 
        <AiFillInstagram />
        <p>Instagram</p>
        </div>



        
        </article>
    </div>
  </div>
  </>
  );
  
};

export default Home;