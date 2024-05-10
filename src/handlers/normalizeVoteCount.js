const normalizeVoteCount = (counter) => {
  if (counter < 999999 && counter > 1000)
    return (counter / 1000).toFixed() + 'K'
  return counter
}

export default normalizeVoteCount