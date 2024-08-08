import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainContent from '../pages/MainContent'
import Live from '../pages/Live'

const MainRoute = () => {
  return (
    <div className='container'>
    <Routes>
        <Route path='/' element={<MainContent/>} />
        <Route path='/live-preview' element={<Live/>} />
    </Routes>
    </div>
  )
}

export default MainRoute