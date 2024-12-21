import { LinkedListNode } from '../types/linkedList'
import { useEffect, useState } from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'

interface LinkedListProps {
  list: LinkedListNode | null
  newNodeValue: number | null
}

export default function LinkedList({ list, newNodeValue }: LinkedListProps) {
  const [nodes, setNodes] = useState<React.ReactNode[]>([])
  const [arrowPosition, setArrowPosition] = useState(0)
  const [showNewNode, setShowNewNode] = useState(false)

  useEffect(() => {
    if (newNodeValue !== null) {
      setShowNewNode(false)
      setArrowPosition(0)
      const interval = setInterval(() => {
        setArrowPosition((prev) => {
          if (prev >= getListLength(list) - 1) {
            clearInterval(interval)
            setShowNewNode(true)
            return prev
          }
          return prev + 1
        })
      }, 500)

      return () => clearInterval(interval)
    }
  }, [newNodeValue, list])

  useEffect(() => {
    const renderNodes = () => {
      const newNodes: React.ReactNode[] = []
      let current = list
      let index = 0
      while (current) {
        newNodes.push(
          <div
            key={`node-${index}-${current.value}`}
            className="flex items-center"
          >
            <div className="relative">
              {index === arrowPosition && newNodeValue !== null && (
                <ArrowDown className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-green-500 animate-bounce" />
              )}
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                {current.value}
              </div>
            </div>
            {current.next && <ArrowRight className="text-gray-500 mx-2" />}
          </div>
        )
        current = current.next
        index++
      }

      if (showNewNode && newNodeValue !== null) {
        newNodes.push(
          <div key="new-node" className="flex items-center">
            <ArrowRight className="text-green-500 mx-2" />
            <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-dashed border-green-700 animate-pulse">
              {newNodeValue}
            </div>
          </div>
        )
      }

      setNodes(newNodes)
    }

    renderNodes()
  }, [list, arrowPosition, showNewNode, newNodeValue])

  const getListLength = (list: LinkedListNode | null): number => {
    let length = 0
    let current = list
    while (current) {
      length++
      current = current.next
    }
    return length
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <div className="flex items-center">
        {nodes.length > 0 ? (
          nodes
        ) : (
          <div className="text-gray-500">Empty list</div>
        )}
      </div>
    </div>
  )
}
