import React, { useState, useEffect } from 'react'
import Card from './card'
import Axios from 'axios'

const Cards = () => {
  const [cards, setCards] = useState(null)

  useEffect(() => {
    if (cards === null) {
    Axios.get(
      `https://deckofcardsapi.com/api/deck/5fm1fdsovocs/draw/?count=1`
      )
    .then(response => {
      const result = response.data.cards
      setCards(result)
    })
    .catch(error => {
      return error
    })
    }
  })

  const displayCards = () => {
    if (cards) {
      return cards.map((card) => { 
        return <Card key={card.value} card={card.value}/> 
      })
    }
  }

  return (
    <div>
      {displayCards()}
    </div>
  )
}

export default Cards