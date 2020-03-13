import React, {
  cloneElement,
  CSSProperties,
  useState,
  FC,
  useRef,
  useEffect,
  forwardRef,
  useCallback
} from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactDOM from 'react-dom'
import { useGetStyle, Position } from './useGetStyle'
import useClickOutside from './useClickOutside'

type PopoverComponentProps = {
  content: string | JSX.Element
  children: JSX.Element
  trigger?: 'hover' | 'click'
  position?: Position
  theme?: 'dark' | 'light'
}

type PopoverElementProps = {
  content: string | JSX.Element
  popoverStyle: CSSProperties
  arrowStyle: CSSProperties
  popoverClass: string
  visible: boolean
  parent: HTMLElement
  theme: 'dark' | 'light'
}

const transitionTime = 200

const createWrapper = () => {
  const div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.top = '0'
  div.style.left = '0'
  div.style.width = '100%'
  document.body.appendChild(div)
  return div
}

const PopoverElement = forwardRef<HTMLDivElement, PopoverElementProps>((props, ref) => {
  const { content, popoverStyle, arrowStyle, visible, parent, theme, popoverClass } = props

  if (!parent) return null

  const hasPopoverStyle = popoverStyle instanceof Object && Object.keys(popoverStyle).length

  return ReactDOM.createPortal(
    <CSSTransition in={visible} classNames="app-popover-wrapper" timeout={transitionTime}>
      <div
        ref={ref}
        className={`app-popover ${theme} ${popoverClass}`}
        style={{ ...popoverStyle, opacity: hasPopoverStyle ? 1 : 0, display: visible ? 'block' : 'none' }}
      >
        <div className="app-popover-arrow" style={arrowStyle} />
        <div className="app-popover-content">{content}</div>
      </div>
    </CSSTransition>,
    parent
  )
})

const ReactPopover: FC<PopoverComponentProps> = ({ content, children, trigger, position, theme }) => {
  if (!children) return null
  // console.error()
  
  const wrapperRef = useRef<HTMLElement>()
  const [visible, setVisible] = useState(false)
  const childRef = useRef<HTMLElement>(null)
  const [popoverCurrent, setPopoverCurrent] = useState<HTMLElement>()
  const popoverRef = useCallback((node: HTMLElement) => {
    node && setPopoverCurrent(node)
  }, [])

  const { popoverStyle, arrowStyle, popoverClass } = useGetStyle(childRef.current!, popoverCurrent!, position!)

  const renderWraper = () => {
    if (!wrapperRef.current) {
      wrapperRef.current = createWrapper()
    }
  }

  useClickOutside(() => {
    setVisible(false)
  }, [popoverCurrent!, childRef.current!])

  useEffect(() => {
    return () => {
      if (wrapperRef.current) document.body.removeChild(wrapperRef.current)
    }
  }, [])

  const cloneChildren = cloneElement(children, {
    ref: childRef,
    onMouseOverCapture() {
      if (trigger === 'click') return
      renderWraper()
      if (!visible) setVisible(true)
    },
    onMouseOut() {
      if (trigger === 'click') return
      setVisible(false)
    },
    onClickCapture() {
      if (trigger !== 'click') return
      renderWraper()
      if (!visible) setVisible(true)
    }
  })

  return (
    <>
      {cloneChildren}
      <PopoverElement
        ref={popoverRef as any}
        parent={wrapperRef.current!}
        content={content}
        visible={visible}
        popoverStyle={popoverStyle}
        arrowStyle={arrowStyle}
        popoverClass={popoverClass!}
        theme={theme!}
      />
    </>
  )
}

ReactPopover.defaultProps = {
  trigger: 'hover',
  position: 'bottomLeft',
  theme: 'light'
}

export default ReactPopover
