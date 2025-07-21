import React, { useContext } from 'react'
import { BContext } from './Usecontext'
export default function Mainn() {
  const amarnam= useContext(BContext)
  return (
    <div>Mainnhhhhhhhhhhhhh   {amarnam}</div>
  )
}
