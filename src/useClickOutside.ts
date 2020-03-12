import { useEffect, useState } from 'react'

type Nodes = Array<HTMLElement>

export default function useClickOutside(callback: EventListener, nodes: Nodes) {
  const [isTouchEvent, setTouchEvent] = useState(false)
  const eventType = isTouchEvent ? 'touchend' : 'click'

  function handleEvent(e: Event) {
    if (nodes.some(node => node?.contains(e.target as Node))) return
    callback(e)
  }

  useEffect(() => {
    document.addEventListener(eventType, handleEvent, true)

    return () => {
      document.removeEventListener(eventType, handleEvent, true)
    }
  })

  useEffect(() => {
    setTouchEvent('ontouchstart' in document.documentElement)
  }, [])
}
