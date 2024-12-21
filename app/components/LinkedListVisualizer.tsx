'use client'

import { useState, useCallback, useEffect } from 'react'
import LinkedList from './LinkedList'
import LinkedListOperations from './LinkedListOperations'
import { LinkedListNode } from '../types/linkedList'
import { addNode, removeNode } from '../utils/linkedListOperations'

export default function LinkedListVisualizer() {
  const [list, setList] = useState<LinkedListNode | null>(null)
  const [updateCounter, setUpdateCounter] = useState(0)
  const [newNodeValue, setNewNodeValue] = useState<number | null>(null)

  useEffect(() => {
    console.log(
      'LinkedListVisualizer re-rendered, current list:',
      JSON.stringify(list)
    )
  }, [list])

  const handleAddNode = useCallback((value: number) => {
    console.log('handleAddNode called with value:', value)
    setNewNodeValue(value)
    setTimeout(() => {
      setList((prevList) => {
        const newList = addNode(prevList, value)
        console.log('Adding node:', value, 'New list:', JSON.stringify(newList))
        setUpdateCounter((prev) => prev + 1)
        return newList
      })
      console.log('handleAddNode completed')
      setTimeout(() => setNewNodeValue(null), 1000) // Reset newNodeValue after animation
    }, 2500) // Increased delay to allow for full arrow animation
  }, [])

  const handleRemoveNode = useCallback((value: number) => {
    setList((prevList) => {
      const newList = removeNode(prevList, value)
      console.log('Removing node:', value, 'New list:', JSON.stringify(newList))
      setUpdateCounter((prev) => prev + 1)
      return newList
    })
  }, [])

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Linked List</h2>
      <LinkedList key={updateCounter} list={list} newNodeValue={newNodeValue} />
      <LinkedListOperations onAdd={handleAddNode} onRemove={handleRemoveNode} />
    </div>
  )
}
