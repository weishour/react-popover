import { useState, useEffect } from 'react'

export type Position =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'rightTop'
  | 'right'
  | 'rightBottom'
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'leftBottom'
  | 'left'
  | 'leftTop'

type Style = {
  top?: number
  right?: number
  bottom?: number
  left?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
}

const arrowWidth = 12

const arrowHeight = 12

export const useGetStyle = (children: HTMLElement, popover: HTMLElement, positon: Position) => {
  const [popoverStyle, setPopoverStyle] = useState<Style>({})
  const [arrowStyle, setArrowStyle] = useState<Style>({})
  const [popoverClass, setPopoverClass] = useState<string>()

  useEffect(() => {
    if (!children || !popover) return
    const childrenRect = children.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()
    const { top: childrenTop, left: childrenLeft, width: childrenWidth, height: childrenHeight } = childrenRect
    const { width: popoverWidth, height: popoverHeight } = popoverRect
    const topTop = childrenTop - popoverHeight - arrowHeight
    const rightLeft = childrenLeft + childrenWidth
    const bottomTop = childrenTop + popoverHeight
    const leftLeft = childrenLeft - popoverWidth - arrowWidth
    switch (positon) {
      case 'topLeft':
        setPopoverStyle({ top: topTop, left: childrenLeft, paddingBottom: 10 })
        setArrowStyle({ left: childrenWidth / 2 - arrowWidth / 2, bottom: arrowHeight / 2 })
        setPopoverClass('top')
        break
      case 'top':
        setPopoverStyle({ top: topTop, left: childrenLeft + childrenWidth / 2 - popoverWidth / 2, paddingBottom: 10 })
        setArrowStyle({ right: popoverWidth / 2 - arrowWidth / 2, bottom: arrowHeight / 2 })
        setPopoverClass('top')
        break
      case 'topRight':
        setPopoverStyle({ top: topTop, left: childrenLeft + childrenWidth - popoverWidth, paddingBottom: 10 })
        setArrowStyle({ right: childrenWidth / 2 - arrowWidth / 2, bottom: arrowHeight / 2 })
        setPopoverClass('top')
        break
      case 'rightTop':
        setPopoverStyle({ left: rightLeft, top: childrenTop, paddingLeft: 10 })
        setArrowStyle({ top: childrenHeight / 2 - arrowHeight / 2, left: arrowWidth / 2 })
        setPopoverClass('right')
        break
      case 'right':
        setPopoverStyle({ left: rightLeft, top: childrenTop + childrenHeight / 2 - popoverHeight / 2, paddingLeft: 10 })
        setArrowStyle({ top: popoverHeight / 2 - arrowHeight / 2, left: arrowWidth / 2 })
        setPopoverClass('right')
        break
      case 'rightBottom':
        setPopoverStyle({ left: rightLeft, top: childrenTop + childrenHeight - popoverHeight, paddingLeft: 10 })
        setArrowStyle({ bottom: childrenHeight / 2 - arrowHeight / 2, left: arrowWidth / 2 })
        setPopoverClass('right')
        break
      case 'bottomRight':
        setPopoverStyle({ top: bottomTop, left: childrenLeft + childrenWidth - popoverWidth, paddingTop: 10 })
        setArrowStyle({ right: childrenWidth / 2 - arrowWidth / 2, top: arrowHeight / 2 })
        setPopoverClass('bottom')
        break
      case 'bottom':
        setPopoverStyle({ top: bottomTop, left: childrenLeft + childrenWidth / 2 - popoverWidth / 2, paddingTop: 10 })
        setArrowStyle({ right: popoverWidth / 2 - arrowWidth / 2, top: arrowHeight / 2 })
        setPopoverClass('bottom')
        break
      case 'bottomLeft':
        setPopoverStyle({ top: bottomTop, left: childrenLeft, paddingTop: 10 })
        setArrowStyle({ left: childrenWidth / 2 - arrowWidth / 2, top: arrowHeight / 2 })
        setPopoverClass('bottom')
        break
      case 'leftBottom':
        setPopoverStyle({ left: leftLeft, top: childrenTop + childrenHeight - popoverHeight, paddingRight: 10 })
        setArrowStyle({ bottom: childrenHeight / 2 - arrowHeight / 2, right: arrowWidth / 2 })
        setPopoverClass('left')
        break
      case 'left':
        setPopoverStyle({ left: leftLeft, top: childrenTop + childrenHeight / 2 - popoverHeight / 2, paddingRight: 10 })
        setArrowStyle({ top: popoverHeight / 2 - arrowHeight / 2, right: arrowWidth / 2 })
        setPopoverClass('left')
        break
      case 'leftTop':
        setPopoverStyle({ left: leftLeft, top: childrenTop, paddingRight: 10 })
        setArrowStyle({ top: childrenHeight / 2 - arrowHeight / 2, right: arrowWidth / 2 })
        setPopoverClass('left')
        break
    }
  }, [children, popover, positon])

  return { popoverStyle, arrowStyle, popoverClass }
}
