import { Pagination } from '@mantine/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const ControlledPagination = ({ pages }) => {
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
      }}
      total={pages}
      style={{display: 'flex', justifyContent: 'end'}}
      color="var(--color-purple500Main)"
    />
  )
}

export default ControlledPagination
