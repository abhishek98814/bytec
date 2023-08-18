// import React from 'react'
import "./css/homecard.css"
import Card1 from "../../assets/images/box1.png"
import Card2 from "../../assets/images/box2.png"
import Card3 from "../../assets/images/box2.png"
import Kathmandu from "../../assets/images/ktm.png"
import Lalitpur from "../../assets/images/lalitpur.png"
import Bhaktpur from "../../assets/images/bhaktpur.png"
import LeapFrog from "../../assets/images/leapfrog.png"
import Dear from "../../assets/images/deer.png"
import M from "../../assets/images/m.png"
import Mac from "../../assets/images/mac.png"


import React from 'react'

export default function HomeCard() {
  return (
    <div className="my-4">
   
    
    <div className="container">
        <div className="row ">
            <div className=" mx-4">
                <h2 className="text-secondary">We Support You</h2>
        </div>
    
        <div className="col-lg-4 col-md-6 cardd">
            <img className="img-fluid" src={Card1} alt="" />
        <button className="btn text-secondary">Bootcamp</button>
        </div>
        <div className="col-lg-4 col-md-6 cardd">
            <img className="img-fluid" src={Card2} alt="" />
        <button className="btn text-secondary">Local Events</button>
        </div>
    
    
        <div className="col-lg-4 col-md-6 cardd">
            <img className="img-fluid" src={Card3} alt="" />
            <button className="btn text-secondary">Workshops</button>
        </div>
        </div>
        </div>
    
    
    
        <div className="secondr">
        <div className="container  my-4">
            <div className="row g-4">
                <div className=" mx-4">
                    <h2 className="text-primary pt-3">Wherever You are</h2>
            </div>
        
            <div className="col-lg-4 col-md-6 cardd">
                <img className="img-fluid" src={Kathmandu} alt="" />
            {/* <button className="btn text-secondary">Kathmandu</button> */}
            <h1 className="text-center">Kathmandu</h1>
            </div>
        
            <div className="col-lg-4 col-md-6 cardd">
                <img className="img-fluid" src={Lalitpur} alt="" />
                {/* <button className="btn text-secondary">Lalitpur</button> */}
                <h1 className="text-center">Lalitpur</h1>
            
            </div>
        
            <div className="col-lg-4 col-md-6 cardd">
                <img className="img-fluid" src={Bhaktpur} alt="" />
                {/* <button className="btn text-secondary">Bhaktpur</button> */}
                <h1 className="text-center">Bhaktpur</h1>
            </div>
            </div>
            </div>
            </div>
    
    
    
    
    
        
        
        <div className="container  my-4">
            <div className=" row third">
                <div className=" mx-4">
                    <h2 className="text-secondary pt-4">Our Sponsor</h2>
            </div>
        
            <div className="col-lg-3 col-md-6 cardd">
                <img className="img-fluid" src={LeapFrog} alt="" />
            </div>
        
            <div className="col-lg-3 col-md-6 cardd">
                <img className="img-fluid" src={M} alt="" />
            </div>
    
            <div className="col-lg-3 col-md-6 cardd">
                <img className="img-fluid" src={Mac} alt="" />
            </div>
    
            <div className="col-lg-3 col-md-6 cardd">
                <img className="img-fluid" src={Dear} alt="" />
            </div>
          
        
            
            </div>
            </div>
    
    
      
      
    
        </div>
    )
}




    
    
  
