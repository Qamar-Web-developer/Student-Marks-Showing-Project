import React from 'react'

export default function Card({name,rollNo,query1,query2}) {
  return (
   <a className="country-card" href={`/country.html?!${name}`}>
  <img src={name} alt="image not found" />
  <div className="card-text">
    <p>
      <b>RollNO: </b>{query1}-{query2}-0<span>{rollNo}</span>
    </p>
  
  </div>
</a>
  )
}
