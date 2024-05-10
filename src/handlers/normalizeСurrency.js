const normalizeСurrency = (budget) => {
  return `$${String(budget).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

export default normalizeСurrency
