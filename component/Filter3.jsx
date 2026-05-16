import React from 'react'

export default function Filter({ setQuery3 }) {
  return (
    <>
      <input className="filter-by-region" placeholder="no of Students" onChange={(e) => setQuery3(e.target.value)}/>
       
    </>


  )
}
