import React from "react"
import { Navbar } from "./components/Navbar"
import './style.css'
import { Hero } from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App () {
  const cards = data.map((el => {
    return <Card
      key={el.id}
      el={el}
    />
  }))
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}