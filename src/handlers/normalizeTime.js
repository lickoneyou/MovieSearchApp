const normalizeTime = (mins) => {
  const hours = Math.trunc(mins / 60)
  const minutes = mins % 60
  return `${hours}h ${minutes}m`
}

export default normalizeTime
