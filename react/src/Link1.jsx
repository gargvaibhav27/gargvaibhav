import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

function Home(){
    return <h1>Home Page</h1>
}

function About(){
    return <h1>About Page</h1>
}


function Link1() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>

        
            </Routes>

    </div>
  )
}

export default Link1