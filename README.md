# react-popover
A tooltip component with react.

### Install

```bash
$ yarn add @winme/react-popover
```
or

### Usage

```javascript
import Popover from '@winme/react-popover'
import '@winme/react-popover/dist/index.css'

export default function App() {
  return (
    <Popover content="some message" trigger="click" position="bottomLeft" theme="dark">
      <span>Click</span>
    </Popover>
  )
}
```