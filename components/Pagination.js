import React from 'react'
import { useGridStore } from '../store/store'

const Pagination = () => {
  const { page, setPage } = useGridStore()

  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
        className="px-4 py-2 rounded bg-black text-white disabled:bg-gray-600"
      >
        Previous
      </button>
      <span>Page {page + 1}</span>
      <button
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 rounded bg-black text-white"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
