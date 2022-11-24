import React from "react"
import { Navbar } from "./components/Navbar"
import './style.css'
import { Hero } from "./components/Hero"
import Card from "./components/Card"

export default function App () {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img="image 12.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}