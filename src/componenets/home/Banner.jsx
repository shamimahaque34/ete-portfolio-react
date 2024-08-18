import { ReactTyped } from "react-typed";
export default function Banner(){
    return(
        <div  className="container section-padding banner">
        <div  className="row">
            <div  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 banner-content">
            <h3>  
            Looking for...
            </h3> 
           <h1>
           <ReactTyped
              strings={[
                "Web Design?",
                "Web Development?",
                "A WordPress Website?",
                "eCommerce Solution?",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    >

   
    </ReactTyped>
    
</h1>
 
              
               {/* <h3>Looking for...</h3> */}
               
                
                
               
                    <p>Let me provide <span>High-Quality</span> web developement services  <br/>
                       at an <span>Affordable</span> cost.
                    </p>
                    
                <a href="about.html"><button type="button"  className="main-button">About</button></a>
                <a href="portfolio.html">
                <button type="button"  className="another-button"> Recent Projects</button></a>
      
            </div>
            <div  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 banner-img">
                <img src="assets/images/banner-img.svg" alt="img"/>
            </div>
        </div>
    </div>   
    );
}