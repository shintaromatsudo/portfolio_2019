import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
  }

  componentDidMount() {
    this.createBarChart()
  }
  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart() {
    const node = this.node
    const W = 700,
      H = 450,
      BAR_W = 30,
      BAR_PADDING = 40,
      W_PADDING = 25,
      H_PADDING = 10

    const svg = d3
      .select(node)
      .attr('width', W)
      .attr('height', H)

    svg
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
      .attr('x', function(d, i) {
        return d[1]
      })
      .attr('width', 0)
      .attr('x', H_PADDING)
      .transition()
      .duration(500)
      .attr('y', function(d, i) {
        return i * BAR_PADDING
      })
      .delay(function(d, i) {
        return i * 70
      })
      .attr('height', BAR_W)
      .attr('width', function(d) {
        return d[1] * 5
      })
      .attr('style', 'fill:turquoise')

    svg
      .selectAll('text')
      .data(this.props.data)
      .enter()
      .append('text')
      .text(function(d) {
        return d[1]
      })
      .attr('text-anchor', 'middle')
      .attr('y', function(d, i) {
        return i * BAR_PADDING + W_PADDING
      })
      .attr('x', function(d, i) {
        return d[1] * 4.8
      })
      .attr('font-size', '20px')
      .attr('fill', 'black')

    svg
      .append('rect')
      .attr('height', 430)
      .attr('width', 1)
      .attr('y', 0)
      .attr('x', H_PADDING)

    svg
      .selectAll('.x_text')
      .data(this.props.data)
      .enter()
      .append('text')
      .attr('class', 'x_text')
      .attr('y', function(d, i) {
        return i * BAR_PADDING + W_PADDING
      })
      .attr('x', H_PADDING + 10)
      .text(function(d, i) {
        return d[0]
      })
  }

  render() {
    return <svg ref={node => (this.node = node)} />
  }
}

export default BarChart
