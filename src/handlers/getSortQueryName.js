const getSortQueryName = (query) => {
  const filters = {
    'Title ▲': 'title.asc',
    'Title ▼': 'title.desc',
    'Popularity ▲': 'popularity.asc',
    'Popularity ▼': 'popularity.desc',
    'Release date ▲': 'primary_release_date.asc',
    'Release date ▼': 'primary_release_date.desc',
    'Vote average ▲': 'vote_average.asc',
    'Vote average ▼': 'vote_average.desc',
    'Vote count ▲': 'vote_count.asc',
    'Vote count ▼': 'vote_count.desc',
  }
  return query
    ? Object.entries(filters).find((el) => el.includes(query))[0]
    : ''
}

export default getSortQueryName
