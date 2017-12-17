import React from 'react'

export default class RetinaCanvas extends React.Component {
  constructor(props) {
    super(props)

    this.state = { context: null }
  }
  componentDidMount() {
    const context = this.refs.canvas.getContext('2d')
    context.scale(2, 2)
    this.setState({ context })
  }
  componentDidUpdate() {
    this.props.drawFn(this.refs.canvas, this.state.context, this.props.drawState)
  }
  render() {
    return (
      <canvas
        ref="canvas"
        width={this.props.width * 2}
        height={this.props.height * 2}
        style={{
          width: this.props.width,
          height: this.props.height
        }}
      />
    )
  }
}
