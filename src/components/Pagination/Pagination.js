import { Pagination } from '@mantine/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const ControlledPagination = ({ pages, position = 'end' }) => {
  const [activePage, setPage] = useState(1)
  const dispatch = useDispatch()

  return (
    <Pagination
      value={activePage}
      boundaries={0}
      onChange={(e) => {
        setPage(e)
        dispatch({
          type: 'ADD_FILTER',
          payload: { filter: 'page', value: e },
        })
        window.scrollTo(0, 0)
      }}
      total={pages}
      style={{ display: 'flex', justifyContent: position }}
      color="var(--color-purple500Main)"
    />
  )
}

export default ControlledPagination
