import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './pages/homepage'
import Skill from './pages/skill'
import About from './pages/about'
import Project from './pages/project'
import Contact from './pages/contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skill' element={<Skill/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>


        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
