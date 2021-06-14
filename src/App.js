import React, { useState, useEffect } from 'react'
import './App.css'
import greatNovels from './components/greatnovels'
import { pulledData, filtered } from './utils/greatnovels'

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
    <GreatNovels 
      greatNovelsDataAsProps={filteredNovels}
      setSearchTerm={setSearchTerm}
      />
    </>
  )
}
