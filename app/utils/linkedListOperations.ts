import { LinkedListNode } from '../types/linkedList'

export function addNode(
  list: LinkedListNode | null,
  value: number
): LinkedListNode {
  const newNode: LinkedListNode = { value, next: null }

  if (!list) {
    return newNode
  }

  let current = list
  while (current.next) {
    current = current.next
  }
  current.next = newNode

  return list
}

export function removeNode(
  list: LinkedListNode | null,
  value: number
): LinkedListNode | null {
  if (!list) {
    return null
  }

  if (list.value === value) {
    return list.next
  }

  let current = list
  while (current.next) {
    if (current.next.value === value) {
      current.next = current.next.next
      return list
    }
    current = current.next
  }

  return list
}
