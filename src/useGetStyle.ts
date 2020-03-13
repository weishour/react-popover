import { useState, useEffect } from 'react'

const positionObj = {
  TOPLEFT: 'topLeft',
  TOP: 'top',
  TOPRIGHT: 'topRight',
  RIGHTTOP: 'rightTop',
  RIGHT: 'right',
  RIGHTBOTTOM: 'rightBottom',
  BOTTOMRIGHT: 'bottomRight',
  BOTTOM: 'bottom',
  BOTTOMLEFT: 'bottomLeft',
  LEFTBOTTOM: 'leftBottom',
  LEFT: 'left',
  LEFTTOP: 'leftTop'
} as const

export type Position = typeof positionObj[keyof typeof positionObj]

const validPosition = (position: Position) => Object.values(positionObj).some(p => p === position)

type Style = {
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
  transform?: string
}

const arrowWidth = 12

const arrowHeight = 12

export const useGetStyle = (children: HTMLElement, popover: HTMLElement, position: Position) => {
  const [popoverStyle, setPopoverStyle] = useState<Style>({})
  const [arrowStyle, setArrowStyle] = useState<Style>({})
  const [popoverClass, setPopoverClass] = useState<string>()

  const mergePopoverStyle = (style: Style) => {
    setPopoverStyle(s => ({ ...s, ...style }))
  }

  const mergePopoverClass = (classname: string) => {
    setPopoverClass(c => (c ? `${c} ${classname}` : classname))
  }

  if (!validPosition(position)) {
    position = 'bottomLeft'
  }

  // if (!validPosition(position)) {
  //   position = 'bottomLeft'
  //   console.error(`
  //     postion not a valid value, it shound be one of
  //     ("topLeft" | "top" | "topRight" | "rightTop" | "right" | "rightBottom" |
  //     "bottomRight" | "bottom" | "bottomLeft" | "leftBottom" | "left" | "leftTop")
  //   `)
  // }

  useEffect(() => {
    // Correct popover position needs children's position and itself's width or height to render.
    if (!children || !popover) return
    const childrenRect = children.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()
    const { top: childrenTop, left: childrenLeft, width: childrenWidth, height: childrenHeight } = childrenRect
    const { width: popoverWidth, height: popoverHeight } = popoverRect

    const isTop = position.toLowerCase().indexOf(positionObj.TOP) === 0
    const isRight = position.toLowerCase().indexOf(positionObj.RIGHT) === 0
    const isBottom = position.toLowerCase().indexOf(positionObj.BOTTOM) === 0
    const isLeft = position.toLowerCase().indexOf(positionObj.LEFT) === 0

    if (isTop) {
      mergePopoverStyle({ top: childrenTop - popoverHeight - arrowHeight })
      // Every arrow that has different direct has different style, add a class to distinguish them
      mergePopoverClass(positionObj.TOP)
    }
    if (isRight) {
      mergePopoverStyle({ left: childrenLeft + childrenWidth + arrowWidth })
      mergePopoverClass(positionObj.RIGHT)
    }
    if (isBottom) {
      mergePopoverStyle({ top: childrenTop + popoverHeight + arrowHeight })
      mergePopoverClass(positionObj.BOTTOM)
    }
    if (isLeft) {
      mergePopoverStyle({ left: childrenLeft - popoverWidth - arrowWidth })
      mergePopoverClass(positionObj.LEFT)
    }

    switch (position) {
      case positionObj.TOPLEFT:
        mergePopoverStyle({ left: childrenLeft })
        // side arrow postion need to calculate
        setArrowStyle({ left: childrenWidth / 2 - 12 })
        break
      case positionObj.TOP:
        mergePopoverStyle({ left: childrenLeft + childrenWidth / 2 - popoverWidth / 2 })
        // The center arrow is unnecessary to calculate so position style has set be in css file.
        // Add an extra class named `center` to popover to render center arrow
        mergePopoverClass('center')
        break
      case positionObj.TOPRIGHT:
        mergePopoverStyle({ left: childrenLeft + childrenWidth - popoverWidth })
        setArrowStyle({ right: childrenWidth / 2 - 12 })
        break
      case positionObj.RIGHTTOP:
        mergePopoverStyle({ top: childrenTop })
        setArrowStyle({ top: childrenHeight / 2 - 8 })
        break
      case positionObj.RIGHT:
        mergePopoverStyle({ top: childrenTop + childrenHeight / 2 - popoverHeight / 2 })
        mergePopoverClass('center')
        break
      case positionObj.RIGHTBOTTOM:
        mergePopoverStyle({ top: childrenTop + childrenHeight - popoverHeight })
        setArrowStyle({ bottom: childrenHeight / 2 - 8 })
        break
      case positionObj.BOTTOMRIGHT:
        mergePopoverStyle({ left: childrenLeft + childrenWidth - popoverWidth })
        setArrowStyle({ right: childrenWidth / 2 - 8 })
        break
      case positionObj.BOTTOM:
        mergePopoverStyle({ left: childrenLeft + childrenWidth / 2 - popoverWidth / 2 })
        mergePopoverClass('center')
        break
      case positionObj.BOTTOMLEFT:
        mergePopoverStyle({ left: childrenLeft })
        setArrowStyle({ left: childrenWidth / 2 - 8 })
        break
      case positionObj.LEFTBOTTOM:
        mergePopoverStyle({ top: childrenTop + childrenHeight - popoverHeight })
        setArrowStyle({ bottom: childrenHeight / 2 - 8 })
        break
      case positionObj.LEFT:
        mergePopoverStyle({ top: childrenTop + childrenHeight / 2 - popoverHeight / 2 })
        mergePopoverClass(' center')
        break
      case positionObj.LEFTTOP:
        mergePopoverStyle({ top: childrenTop })
        setArrowStyle({ top: childrenHeight / 2 - 8 })
        break
    }
  }, [children, popover, position])

  return { popoverStyle, arrowStyle, popoverClass }
}

const a = {
  a: 1,
  b: '2'
}

type A = typeof a[keyof typeof a]
