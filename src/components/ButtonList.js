import React from 'react'
import Button from './Button'

// const list =["All","Live","Gaming"]
const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="coding"/>
      <Button name="Trading"/>
      <Button name="Data"/>
      <Button name="Money"/>
      <Button name="Dev"/> 
      <Button name="Python"/> 
    </div>
  )
}

export default ButtonList
