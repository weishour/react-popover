# react-popover
A `<Popover>` component for react.

### Features
- **React Hooks**: ✅
- **TypeScript** ✅
- **Server Render** ✅
- **Lazy Render**: ✅
- **Theme**: ✅
- **Configurable**: ✅

### Install

```bash
$ yarn add @winme/react-popover
```


### Usage

```jsx
import Popover from '@winme/react-popover'
import '@winme/react-popover/dist/index.css'

export default function App() {
  return (
    <Popover content="some message">
      <span>Click</span>
    </Popover>
  )
}
```

### Props

Prop              | Type       | Required | Default     | Description
----------------- | --------   | -------- | ----------- | -----------
theme             | string     | false    | light       | color theme. one of ['light', 'dark']
trigger           | string     | false    | hover       | trigger popover method. one of ['hover', 'click']
position          | string     | false    | bottomLeft  | how position the popover. one of ['topLeft', 'top', 'topRight', 'rightTop', 'right', 'rightBottom', 'bottomRight', 'bottom', 'bottomLeft', 'leftBottom', 'left', 'leftTop']
content           | ReactNode  | true     |             | popover content
children          | ReactNode  | true     |             | popover reference


### Contributing

We very much welcome your contribution, you can build together with us in the following ways 😃

- Use Ant Design Pro in your daily work.
- Submit [GitHub issues](https://github.com/WinmezzZ/react-popover/issues) to report bugs or ask questions.
- Propose [Pull Request](https://github.com/WinmezzZ/react-popover/pulls) to improve our code.

### License

`react-popover` is released under the MIT license.