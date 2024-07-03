import React, { useState, createContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './components/home'
import Forms from './components/formPage'
import BlogSearch from './components/blogsearch'
import Blog from './components/subcomponents/singleBlog'

import './App.css'

export const SessionContext = createContext();

function App() 
{
  const [sessionUserID, setsessionUserID] = useState(-5);

  return (
    <>
    <SessionContext.Provider value={{sessionUserID, setsessionUserID}}>

    <Routes>
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home/>} />
      <Route path="/SignIn" element={<Forms/>} />
      <Route path="/BlogSearch" element={<BlogSearch/>} />
      <Route path="/Blog" element={<Blog/>} />
    </Routes>

    </SessionContext.Provider>
    </>
  )
}

export default App
