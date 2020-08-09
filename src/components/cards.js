import React, { useState, useEffect } from 'react'
import Card from './card'
import Axios from 'axios'

const Cards = () => {
  const [cards, setCards] = useState(null)

  useEffect(() => {
    if (cards === null) {
    Axios.get(`https://deckofcardsapi.com/api/deck/8bb01is0rz7z/draw/?count=2`)
    .then(response => {
      const result = response.data.cards
      setCards(result)
    })
    .catch(error => {
      return error
    })
    }
  })
 
  return (
    <div>
      {/* {cards ? cards.map((card) => { return <Card key={card.value} card={card.value}/> }) : <p>No Cards</p>} */}
      {cards ? cards.map((card) => { return <Card key={card.value} card={card.value}/> }) : <p>No Cards</p>}
    </div>
  )
}

export default Cards