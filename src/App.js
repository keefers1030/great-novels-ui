import React, {useState, useEffect} from 'react'
import './App.css'
import greatNovels from './components/greatnovels'
import {pulledData, filtered} from './utils/greatnovels'

export default () => {
  const [greatNovelsData, setNovelsData] = useState([])
  const [filteredNovels, setFilteredNovels] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    async function pullData() {
      const data
    }
  })
}
