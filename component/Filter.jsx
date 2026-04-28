import React from 'react'

export default function Filter({setQuery}) {
  return (
        <select className="filter-by-region" onChange={(e)=>setQuery(e.target.value)}>
          <option hidden>Filter by Region</option>
          <option value="FA22-BSE">FA22-BSE</option>
          <option value="FA23-BSE">FA23-BSE</option>
          <option value="FA24-BSE">FA24-BSE</option>
          <option value="FA25-BSE">FA25-BSE</option>
          <option value="FA21-BSE">FA21-BSE</option>
        </select>
      
  )
}
