'use client'

import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

interface LinkedListOperationsProps {
  onAdd: (value: number) => void
  onRemove: (value: number) => void
}

export default function LinkedListOperations({
  onAdd,
  onRemove,
}: LinkedListOperationsProps) {
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    const value = parseInt(inputValue)
    if (!isNaN(value)) {
      onAdd(value)
      setInputValue('')
    }
  }

  const handleRemove = () => {
    const value = parseInt(inputValue)
    if (!isNaN(value)) {
      onRemove(value)
      setInputValue('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          className="w-40"
        />
        <Button onClick={handleAdd} disabled={inputValue === ''}>
          Add Node
        </Button>
        <Button
          onClick={handleRemove}
          variant="outline"
          disabled={inputValue === ''}
        >
          Remove Node
        </Button>
      </div>
    </div>
  )
}
