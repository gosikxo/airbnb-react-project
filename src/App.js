import React from "react"
import { Navbar } from "./components/Navbar"
import './style.css'
import { Hero } from "./components/Hero"

export default function App() {
    return (
        <div className="App">
          <Navbar />
          <Hero />
        </div>
    )
}