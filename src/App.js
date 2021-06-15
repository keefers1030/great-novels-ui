/* eslint-disable */ 
import React, { useState, useEffect } from 'react'
import './App.css'
import GreatNovels from './components/greatnovels'
import { pulledData, filtered } from './utils/greatnovels'
import book from './book.png'

export default () => {
  const [greatNovelsData, setNovelsData] = useState([])
  const [filteredNovels, setFilteredNovels] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {
      const data = await pulledData()

      setNovelsData(data)
      setFilteredNovels(data)
    }
    pullData()
  }, [])
  useEffect(() => {
    const greatNovels = filtered(greatNovelsData, searchTerm)
    setFilteredNovels(greatNovels)
  }, [searchTerm])
  return (
    <>
    <img src={book} alt="Logo" />
    <GreatNovels 
      greatNovelsAsProps={filteredNovels}
      setSearchTerm={setSearchTerm}
      />
    </>
  )
}