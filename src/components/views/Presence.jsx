
import React from 'react'
import "./css/presence.css"
import PresenceCard from '../card/PresenceCard'

export default function Presence() {
  return (
<>
<div className="container-fluid presence">
<button className="btn btn-lg text-dark">Presence</button>

<div className="inputbox">
        <input type="email" class="form-control fs-4"  placeholder="Search by area or Event" />
</div>
</div>
<PresenceCard />
</>
    )
}
