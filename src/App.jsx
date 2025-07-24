import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SinglePage from './pages/SinglePage'
import Form from './pages/Form'

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/:id' element={<SinglePage/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App