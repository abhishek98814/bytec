
import React from 'react'
import map from "../../assets/images/map.png"
import "./css/contactcard.css"

export default function ContactCard() {
  return (
<>
<div className="container">
      <div className="boxxx">
        <h4 className="text-center text-secondary pt-4">Have a question about Byte Club?<br/>Connect with us</h4>

        <div className="container inputboxx d-flex">
          <div>
            <input className="mx-2" type="First name" placeholder="First Name*" />
            <input className="mx-2" type="Last name" placeholder="Last Name*" /><br/>
            <input className="mx-2 mt-4" type="First name" placeholder="First Name*" />
            <input className="mx-2" type="Last name" placeholder="Last Name*" />
          </div>
          
        </div>
        <textarea className="text" placeholder="write a mesage"></textarea>

      </div>

    </div>

    <div className="container contactt">
    <p className="information">Contact Information</p> 
<div className="d-flex justify-content-between my-5">
    <div>
        <h4>Phone</h4>
        <p>+977-98088893123 <br/> 01-5250515</p>
    </div>
<div>
    <h4>Email</h4>
    <p>cb@gmail.com<br />db@gmail.com</p>
</div>

<div>  
    <h4>Address</h4>
    <p>Kandevsthan, Kupondole, <br />Lalitpur, Nepal</p>
</div>
</div>
  </div>

  <div className="map">
    <img src={map} alt="" />
  </div>
</>
    )
}
