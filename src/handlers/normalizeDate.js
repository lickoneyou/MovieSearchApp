const normalizeDate = (date) => {
  const d = new Date(date)
  const month = d.toLocaleString('en-us', { month: 'long' })
  const day = d.getDate()
  const year = d.getFullYear()
  return `${month} ${day}, ${year}`
}

export default normalizeDate
