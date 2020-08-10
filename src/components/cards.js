import React, { useState, useEffect } from 'react'
import Card from './card'
import Axios from 'axios'



const Cards = () => {
  const [cards, setCards] = useState(null)

  useEffect(() => {
    if (!cards) {
      Axios({
        method: 'GET',
        url: `https://deckofcardsapi.com/api/deck/5fm1fdsovocs/draw/?count=1`
      }).then(response => {
        setCards(response.data.cards)
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

  const loading = () => {
    if (!cards) {
      return <p data-testid='loading'>Loading...</p>
    }
  }

  return (

    <div>
      {loading()}
      {displayCards()}
    </div>
  )
}

export default Cards