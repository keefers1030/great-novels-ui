import fetchData from '../actions/greatnovels'

export async function pulledData() {
  const data = await fetchData()

  return data
}

export const filtered = (greatNovelsData, searchTerm) => greatNovelsData.filter(greatNovels => {
  return greatNovels.title.toLowerCase().includes(searchTerm.toLowerCase())
})
