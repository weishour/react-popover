const { ReactPopover: Popover, React, ReactDOM } = window

function App() {
  <Popover content="这是一段文本信息">
    <span>点击我</span>
  </Popover>
}

ReactDOM.render(<App/>, document.getElementById('container'));