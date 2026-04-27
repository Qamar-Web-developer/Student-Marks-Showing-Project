import React, { useState } from 'react'

export default function Header() {
const [isDark,setDark]=useState(JSON.parse(localStorage.getItem('isDark')))
if(isDark){
  document.querySelector('body').classList.add('dark')
}
else{
   document.querySelector('body').classList.remove('dark')
}

  return (
 
       <header className="header-container">
      <div className="header-content">
        <h2 className="title"><a href="/">Mirpur University of Science And Technology</a></h2>
        <p className="theme-changer" 
        onClick={()=>{
          setDark(!isDark)
          localStorage.setItem('isDark',!isDark)
         
        }
      }><i className={`fa-regular fa-${isDark?'sun':'moon'}`} ></i>&nbsp;&nbsp;{`${isDark?'Light Mood':'Dark Mood'}`}</p>
      </div>
    </header>
   
  )
}
