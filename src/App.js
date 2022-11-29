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
      img={el.coverImg}
      rating={el.stats.rating}
      reviewCount={el.stats.reviewCount}
      location={el.location}
      title={el.title}
      price={el.price}
      openSpots={el.openSpots}
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