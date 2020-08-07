import React, { useState } from 'react'

const Card = (props) => {
  const [hello, setHello] = useState(props)
 

  return (
    <div>
      <p>{props.hello} I'm a Card</p>
    </div>
  )
}

export default Card