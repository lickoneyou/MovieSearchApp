import getYears from './getYears'

const createArrayYears = (oldestYear) => {
  const result = []
  for (let i = oldestYear; i <= getYears(new Date()); i++) {
    result.push({ value: String(i), lable: String(i) })
  }
  result.shift()
  return result.reverse()
}

export default createArrayYears
