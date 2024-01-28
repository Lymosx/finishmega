import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Images from './pages/Images'
import Contact from './pages/Contact'

export default function SiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/images" element={<Images />}></Route>
            <Route path="/contacts" element={<Contact />}></Route>
        </Routes>
    )
}
