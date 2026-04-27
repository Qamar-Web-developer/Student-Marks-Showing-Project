import React from 'react'

export default function Card({name,rollNo}) {
  return (
   <a className="country-card" href={`/country.html?!${name}`}>
  <img src={name} alt="image not found" />
  <div className="card-text">
    <p>
      <b>RollNO: </b>FA23-BSE-0<span>{rollNo}</span>
    </p>
  
  </div>
</a>
  )
}
