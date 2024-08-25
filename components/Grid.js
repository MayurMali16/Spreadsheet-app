import React from 'react'
import Cell from './Cell'
import Toolbar from './Toolbar'
import { useGridStore } from '../store/store'

const Grid = () => {
  const { cells, updateCell, searchTerm } = useGridStore()

  // Define responsive column classes
  const columnsClass = 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10'

  // Filter cells based on the search term
  const filteredCells = cells.filter(cell =>
    cell.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <Toolbar />
      <div className={`grid gap-1 ${columnsClass}`}>
        {filteredCells.map((cell, index) => (
          <Cell
            key={index}
            index={index}
            value={cell}
            onChange={updateCell}
            totalColumns={10} // Adjust based on columns
          />
        ))}
      </div>
    </div>
  )
}

export default Grid
