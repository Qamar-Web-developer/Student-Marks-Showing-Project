import React from 'react'
import Header from './component/Header'
import  './App.css'
// import Searchbar from './component/SearchBar'
import Filter1 from './component/Filter1'
import Filter2 from './component/Filter2'
import Filter3 from './component/Filter3'
import Card from  './component/Card'
import CardContainer from './component/CardContainer'
import { useState } from 'react'
import Footer from './component/Footer'
// import Country from './Country.css'

export default function App() {
  const [query1,setQuery1]=useState('')
  const [query2,setQuery2]=useState('')
  const [query3,setQuery3]=useState('')

  return (
    <>
      <Header/> 
      <main>
        <div className="search-filter-container">
          
            <Filter1 setQuery1={setQuery1}/>
            <Filter2 setQuery2={setQuery2}/>
            <Filter3 setQuery3={setQuery3}/>
        </div>
        <CardContainer query1={query1} query2={query2} query3={query3}/>
      </main>
      <Footer/>
    </>
  )
}
