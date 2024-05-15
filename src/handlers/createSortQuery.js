const createSortQuery = (filter) => {
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

  return filters[filter]
}

export default createSortQuery
