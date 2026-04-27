import React from 'react';
import { useState } from 'react';

export default function Searchbar({setQuery}) {
  return (
  <div className="search-container">
  <i className="fa-solid fa-magnifying-glass" />
  <input  type="text" onChange={(e)=>setQuery(e.target.value)} placeholder="Search for a country..." />
</div>

  );
}
