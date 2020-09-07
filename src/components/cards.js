import React, { useState, useEffect } from 'react'
import Card from './card'
import axios from 'axios'
// import axios from '../__mocks__/axios' .



const Cards = () => {
  const [cards, setCards] = useState(null)

  useEffect(() => {
    if (!cards) {

      const loadData = async () => {
        const response = await axios.get(`https://deckofcardsapi.com/api/deck/5fm1fdsovocs/draw/?count=1`)
        setCards(response.data.cards) 
      }
      //   Axios({
        //   method: 'GET',
        //   url: `https://deckofcardsapi.com/api/deck/5fm1fdsovocs/draw/?count=1`
        // }).then(response => {
          //   setCards(response.data.cards)
          // })
          loadData()
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