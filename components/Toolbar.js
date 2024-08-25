import React from 'react'
import { useGridStore } from '../store/store'

const Toolbar = () => {
  const { undo, redo, alignment, setAlignment, searchTerm, setSearchTerm } = useGridStore()

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-4 p-4 bg-gray-100 rounded shadow">
      {/* Alignment Buttons */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
        <button
          onClick={() => setAlignment('left')}
          className={`px-4 py-2 rounded ${alignment === 'left' ? 'bg-primary text-white' : 'bg-gray-200 text-black'}`}
        >
          Left
        </button>
        <button
          onClick={() => setAlignment('center')}
          className={`px-4 py-2 rounded ${alignment === 'center' ? 'bg-primary text-white' : 'bg-gray-200 text-black'}`}
        >
          Center
        </button>
        <button
          onClick={() => setAlignment('right')}
          className={`px-4 py-2 rounded ${alignment === 'right' ? 'bg-primary text-white' : 'bg-gray-200 text-black'}`}
        >
          Right
        </button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4 sm:mb-0 flex-grow"
      />

      {/* Undo/Redo Buttons */}
      <div className="flex gap-2">
        <button
          onClick={undo}
          className="px-4 py-2 rounded bg-gray-700 text-white"
        >
          Undo
        </button>
        <button
          onClick={redo}
          className="px-4 py-2 rounded bg-gray-700 text-white"
        >
          Redo
        </button>
      </div>
    </div>
  )
}

export default Toolbar
