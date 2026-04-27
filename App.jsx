import React from 'react'
import Header from './component/Header'
import App from './App.css'
import Searchbar from './component/SearchBar'
import Filter from './component/Filter'
import Card from  './component/Card'
import CardContainer from './component/CardContainer'
import { useState } from 'react'
import Footer from './component/Footer'
// import Country from './Country.css'

export default function App() {
  const [query,setQuery]=useState('')
  return (
    <>
      <Header/> 
      <main>
        <div className="search-filter-container">
            <Searchbar setQuery={setQuery} />
            <Filter/>
        </div>
        <CardContainer query={query} />
      </main>
      <Footer/>
    </>
  )
}
