import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Banner from './Component.js/Banner'
import Home from './Home'
import Content from './Component.js/Content'
import Footer from './Footer'

function App() {
  return (
    <>
   <Router>
           <Routes>

             <Route path="/" element = {<Home/>}> </Route>
             <Route path='/banner' element ={<Banner/>}></Route>
             <Route path="/content" element={<Content/>}></Route>
             <Route path='/footer' element = {<Footer/>}></Route>
            </Routes>
        </Router>
   </>
  )
}

export default App