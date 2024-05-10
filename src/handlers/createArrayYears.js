import getYears from './getYears'

const createArrayYears = (oldestYear) => {
  const result = []
  for (let i = oldestYear; i <= getYears(new Date()); i++) {
    result.push(String(i))
  }
  return result.reverse()
}

export default createArrayYears
