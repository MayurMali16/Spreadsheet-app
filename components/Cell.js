import React, { useState, useEffect, useRef } from 'react'
import { useGridStore } from '../store/store'

const Cell = ({ index, value, onChange, totalColumns }) => {
  const alignment = useGridStore((state) => state.alignment)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)

  const handleInputChange = (e) => {
    onChange(index, e.target.value)
  }

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      // Move to the next cell (right)
      const nextIndex = index % totalColumns === totalColumns - 1 ? index - (totalColumns - 1) + 1 : index + 1
      const nextCell = document.querySelector(`[data-cell-index="${nextIndex}"]`)
      nextCell?.focus()
    } else if (e.key === 'ArrowLeft') {
      // Move to the previous cell (left)
      const prevIndex = index % totalColumns === 0 ? index + (totalColumns - 1) - 1 : index - 1
      const prevCell = document.querySelector(`[data-cell-index="${prevIndex}"]`)
      prevCell?.focus()
    } else if (e.key === 'ArrowDown') {
      // Move to the next cell (down)
      const nextIndex = index + totalColumns
      const nextCell = document.querySelector(`[data-cell-index="${nextIndex}"]`)
      nextCell?.focus()
    } else if (e.key === 'ArrowUp') {
      // Move to the previous cell (up)
      const prevIndex = index - totalColumns
      const prevCell = document.querySelector(`[data-cell-index="${prevIndex}"]`)
      prevCell?.focus()
    }
  }

  useEffect(() => {
    const currentInput = inputRef.current
    if (currentInput) {
      currentInput.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      if (currentInput) {
        currentInput.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [index])

  const alignmentClass = alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left'

  return (
    <input
      type="text"
      ref={inputRef}
      value={value}
      onChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      data-cell-index={index}
      className={`border p-2 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-primary rounded ${alignmentClass} ${isFocused ? 'border-black' : 'border-gray-300'}`}
    />
  )
}

export default Cell
