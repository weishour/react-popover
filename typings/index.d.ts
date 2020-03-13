declare module '@winme/react-popover' {
  import React from 'react'

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

  interface ReactPopoverProps {
    /** 气泡内容 */
    content: string | JSX.Element
    children: JSX.Element
    /** 触发方式 */
    trigger?: 'hover' | 'click'
    /** 气泡展示位置 */
    position?: Position
    /** 主题色 */
    theme?: 'dark' | 'light'
  }
  const popover: React.FC<ReactPopoverProps>
  export default popover
}