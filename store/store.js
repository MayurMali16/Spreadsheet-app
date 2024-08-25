import { create } from 'zustand'

export const useGridStore = create((set) => ({
  cells: Array(1000).fill(''), // Initialize 1000 blank cells
  history: [], // To store the history of cell states
  future: [], // To store the undone states for redo functionality
  page: 0,
  cellsPerPage: 100,
  searchTerm: '',
  alignment: 'left',
  
  // Update the value of a cell
  updateCell: (index, value) => 
    set((state) => {
      // Save the current state to history before updating
      const newHistory = [...state.history, state.cells]
      const newCells = [...state.cells]
      newCells[index] = value

      return { cells: newCells, history: newHistory, future: [] } // Clear future on new action
    }),

  // Undo the last change
  undo: () => set((state) => {
    if (state.history.length === 0) return state

    const lastState = state.history[state.history.length - 1]
    const newHistory = state.history.slice(0, -1) // Remove the last history entry

    return { 
      cells: lastState, 
      history: newHistory, 
      future: [state.cells, ...state.future] 
    }
  }),

  // Redo the last undone change
  redo: () => set((state) => {
    if (state.future.length === 0) return state

    const nextState = state.future[0]
    const newFuture = state.future.slice(1) // Remove the first future entry

    return { 
      cells: nextState, 
      history: [...state.history, state.cells], 
      future: newFuture 
    }
  }),

  // Pagination controls
  setPage: (page) => set({ page }),

  // Search term control
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Alignment controls
  setAlignment: (alignment) => set({ alignment }),
}))
