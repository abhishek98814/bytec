

import React from 'react'
import Logo from "../../assets/images/logo.png"
import "./css/footer.css"



export default function Footer() {
  return (
<>
 <div className="foter mt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mt-5">
          <img src={Logo} alt="" />
          <p className="lato">
            Replnish his third creature and meat blessed void a fruit gathered
            you're two water own morning gathered greater.
          </p>
        </div>

        <div className="col-lg-3 mt-5">
          <div>
            <h4 className="mx-4 px-2 text-dark">Quicks Links</h4>
          </div>

          <div className='mx-3'>
            <div className="lato mt-4 px-4">
              <p>Events</p>
              <p>About Us</p>
              <p>Contact</p>
              <p>Blog</p>
            </div>
          </div>
        </div>

        <div className="col-lg-5 mt-5">
          <div>
            <h4 className="text-dark">Sign up for ours Newsletter</h4>
            <p className="lat">Subscribe to know our single updates</p>
          </div>
          <div className="input mt-4 py-4">
            <input type="text" placeholder="Enter Your Email" />
            <span className="suscribe text-light text-center align-items-center"
              ><p
                className="text-center align-items-center mt-3"
              >
                Suscribe Now
              </p></span>
          </div>
<div className="icon my-4 pt-4"> 
   
<i className="fa-brands fa-facebook py-4 px-2 text-primary" style={{fontSize:"1.4rem"}}></i>
<i className="fa-brands fa-instagram px-2 text-primary" style={{fontSize:"1.4rem"}}></i>
<i className="fa-brands fa-square-twitter px-2 text-primary" style={{fontSize:"1.4rem"}}></i>
<i className="fa-brands fa-linkedin  px-2 text-primary" style={{fontSize:"1.4rem"}}></i>
<i className="fa-brands fa-tiktok px-2 text-primary" style={{fontSize:"1.4rem"}}></i>
</div>
       </div>
      </div>
    </div>
  </div>

</>
    )
}
