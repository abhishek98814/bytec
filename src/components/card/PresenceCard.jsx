
import React from 'react'
import ktm from '../../assets/images/ktm.png';
import Lalitpur from '../../assets/images/Lalitpur.png';
import bhaktpur from '../../assets/images/bhaktpur.png';

import './css/presencecard.css'


const presence = [
    {
      image: ktm,
      location: 'kathmandu, Bouddha',
    },
    {
      image: Lalitpur,
      location: 'Lalitpur, patan',
    },
    {
      image: bhaktpur,
      location: 'Bhaktpur, Natyapol',
    },
  ];
  

export default function PresenceCard() {
  return (
<>
<div className="container">
      {presence.map((item, index) => (
        <div className="my-4" key={index}>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <img src={item.image} alt="" className='imagee' />
            </div>
            <div className="col-lg-7 my-4 row1">
              <h5 className="text-dark px-4">Ultimate User Interface User Experience</h5>
              <p className="text-secondary my-4 px-4" style={{ fontWeight: 500 }}>
                Replenish him third creature and meat blessed void a fruit gathered you're they're two wayers. Replenish
                him third creature and meat blessed void a fruit gathered you're they're two wayers.
              </p>
              <div className="d-flex justify-content-between pt-3">
                <p className="pt-2 px-4" style={{ fontWeight: 600 }}>
                  {item.location}
                </p>
                <p className="pt-2" style={{ fontWeight: 600 }}>
                  1st March 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

</>
    )
}
