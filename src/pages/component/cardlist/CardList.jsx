import React from 'react'
import Card from '../card/Card'
import * as St from './cardlist.style'

function CardList() {
  return (
    <div>
      <St.IsDoneStateStyle>Ing...🚗</St.IsDoneStateStyle>
      <Card />
      <St.IsDoneStateStyle>Done🎉</St.IsDoneStateStyle>
    </div>
  )
}

export default CardList