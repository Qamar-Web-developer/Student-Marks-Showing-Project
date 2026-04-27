import React from 'react'

export default function Filter({setQuery}) {
  return (
        <select className="filter-by-region" onChange={(e)=>setQuery('FA23-BSE')}>
          <option hidden>Filter by Region</option>
          <option value="Africa">FA22-BSE</option>
          <option value="America">FA23-BSE</option>
          <option value="Asia">FA24-BSE</option>
          <option value="Europe">FA25-BSE</option>
          <option value="Oceania">Oceania</option>
        </select>
      
  )
}
