/* eslint-disable */ 
import React, { useState } from 'react'
const GreatNovels = props => {
  return (
    <div className="App">
      <h1>Great Novels</h1>
      <input type="text" name="search" onChange={(event) => props.setSearchTerm(event.target.value)}/>
      {props.greatNovelsAsProps.map(greatNovel => {
          console.log(greatNovel.title)

        return (
          <>
            <div>{greatNovel.title}</div>
          </>
        )
      })}
    </div>
  )
}
export default GreatNovels
