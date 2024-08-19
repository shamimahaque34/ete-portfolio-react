import axios from 'axios';
import { useState ,useEffect } from 'react';

export default function Testimonial(){
    const [info,setInfo] =useState([]);

  const fetchData = () =>{
    return axios.get("https://admin.shamima.xyz/api/testimonial-info").then((response) =>{
        setInfo(response.data)});
   
  }
  
    useEffect(() =>{
      fetchData();
    },[])

    return(
        <>
       
        <div className="container section-padding">
         <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        
            
            <div id=""  className="">
           
              
            {info.map((infoObj)=>(
                <div className="testimonial"key={infoObj.id}>
                
                    <div className="client" >
                   
                        <img src={infoObj.image} alt="" />
                    </div>
                    <div className="testimonial-content">
                        <p  className="description">
                          {infoObj.description}
                        </p>
                        <h3    className="client-title">{infoObj.name}
                            <small className="post">{infoObj.designation}</small>
                        </h3>
                    </div>
                    

                </div>
                ))}
                </div>
         
        </div>
    </div>
</div> 


   </> );
}