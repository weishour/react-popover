# react-popover
一个 `<Popover>` 的React组件. [http://popover.winmee.cn](http://popover.winmee.cn)

[English](README.md) | 简体中文

### 特性
- **React Hooks**: ✅
- **TypeScript** ✅
- **Server Render** ✅
- **Lazy Render**: ✅
- **Theme**: ✅
- **Configurable**: ✅

### 安装

```bash
$ yarn add @winme/react-popover
```


### 使用

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

### 属性

Prop              | Type       | Required | Default     | Description
----------------- | --------   | -------- | ----------- | -----------
theme             | string     | false    | light       | color theme. one of ['light', 'dark']
trigger           | string     | false    | hover       | trigger popover method. one of ['hover', 'click']
position          | string     | false    | bottomLeft  | how position the popover. one of ['topLeft', 'top', 'topRight', 'rightTop', 'right', 'rightBottom', 'bottomRight', 'bottom', 'bottomLeft', 'leftBottom', 'left', 'leftTop']
content           | ReactNode  | true     |             | popover content
children          | ReactNode  | true     |             | popover reference


### 贡献

我们非常欢迎您的贡献，您可以通过以下方式与我们共同建设 😃

- 在日常工作中使用Ant Design Pro.
- 提交 [GitHub issues](https://github.com/WinmezzZ/react-popover/issues) 来报告bug或提问.
- 建议 [Pull Request](https://github.com/WinmezzZ/react-popover/pulls) 来改进我们的代码.

### 许可证

`react-popover` is released under the MIT license.