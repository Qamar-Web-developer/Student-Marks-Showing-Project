import React from 'react'
import Header from './component/Header'
import App from './App.css'
import Searchbar from './component/SearchBar'
import Filter1 from './component/Filter1'
import Filter2 from './component/Filter2'
import Card from  './component/Card'
import CardContainer from './component/CardContainer'
import { useState } from 'react'
import Footer from './component/Footer'
// import Country from './Country.css'

export default function App() {
  const [query1,setQuery1]=useState('')
  const [query2,setQuery2]=useState('')

  return (
    <>
      <Header/> 
      <main>
        <div className="search-filter-container">
            <Searchbar  />
            <Filter1 setQuery1={setQuery1}/>
            <Filter2 setQuery2={setQuery2}/>
        </div>
        <CardContainer query1={query1} query2={query2}/>
      </main>
      <Footer/>
    </>
  )
}
