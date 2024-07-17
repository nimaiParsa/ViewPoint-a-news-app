import './App.css'
import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Home from './screens/Home'
import Login from './screens/Login'
import TheHindu from './screens/TheHindu'
import TOI from './screens/TOI'
import NDTV from './screens/NDTV'
import ReadLater from './screens/ReadLaterScreen'
import Signup from './screens/Signup'
import PageDoesntExist from './screens/PageDoesntExist'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/thehindu' element={<TheHindu />} />
      <Route path='/timesofindia' element={<TOI />} />
      <Route path='/ndtv' element={<NDTV />} />
      <Route path='/readlater' element={<ReadLater />} />
      <Route path='/*' element={<PageDoesntExist />}/>
    </Routes>
  )
}
