import React from 'react'
import PropTypes from 'prop-types'
import {withFauxDOM} from 'react-faux-dom'
import styled from 'styled-components'
import _ from 'lodash'

import Pallet from 'components/Pallet'
import Tooltip from 'components/Tooltip'
import withD3Renderer from 'hocs/withD3Renderer'

const d3 = {
  ...require('d3-scale'),
  ...require('d3-selection'),
  ...require('d3-transition'),
  ...require('d3-shape'),
  ...require('d3-interpolate')
}

const {arrayOf, string, number, shape, func} = PropTypes
const LOADING = 'loading...'

const Title = styled.div`
  text-align: center;
  position: relative;
  top: -${({height}) => height * 1 / 5}px;
`

const PalletContainer = styled.div`
  position: relative;
  top: -${({height}) => height * 2 / 3}px;
  right: ${({width}) => width * 3.35 / 11}px;
`

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  .tooltip {
    width: ${({width}) => width / 5}px;
    left: ${({width}) => width * 2 / 5}px;
    top: ${({height}) => height * 3 / 5}px;
  }
`

class PieChart extends React.Component {
  static propTypes = {
    data: arrayOf(
      shape({
        name: string,
        value: number
      })
    ),
    pallet: arrayOf(
      shape({
        name: string,
        value: string
      })
    ),
    width: number,
    height: number,
    thickness: number,
    title: string,
    setVisitColor: func
  }

  state = {
    tooltip: null
  }

  setTooltip = object => {
    this.setState(state => ({tooltip: object}))
  }

  computeTooltipContent = () => {
    const hoveredData = _.find(this.props.data, {
      name: this.state.tooltip
    }).value
    return `${this.state.tooltip}: ${hoveredData}`
  }

  render() {
    const {width, height, title, chart, pallet, setObjColor, data, customPalletNameObj} = this.props
    return (
      <Wrapper className="piechart" width={width} height={height}>
        {chart}
        {window.innerWidth > 816 &&
          <PalletContainer height={height} width={width}>
            {data.map((visitTypeObj, index) => {
              return (
                <Pallet
                  colors={pallet}
                  scope={visitTypeObj.name}
                  pickColor={setObjColor}
                  index={index}
                  key={index}
                  customPalletNameObj={customPalletNameObj}
                />
              )
            })}
          </PalletContainer>
        }
        <Title height={height}>{title}</Title>
        {this.state.tooltip &&
          <Tooltip content={this.computeTooltipContent()} />}
      </Wrapper>
    )
  }

  renderD3 = mode => {
    const {
      width,
      height,
      thickness,
      connectFauxDOM,
      animateFauxDOM
    } = this.props

    // rendering mode
    const render = mode === 'render'
    const resize = mode === 'resize'

    // d3 helpers
    const outerRadius = Math.min(width, height) / 2 - 10
    const innerRadius = outerRadius - thickness
    let data = _.cloneDeep(this.props.data) // pie() mutates data
    var arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)
    var pie = d3
      .pie()
      .value(d => d.value)
      .sort(null)
      .startAngle(-120 * Math.PI / 180)
      .endAngle(120 * Math.PI / 180)
      .padAngle(0.01)

    // arc transitions, see https://bl.ocks.org/mbostock/1346410
    // do not use arrow function here as scope is the path element
    function arcTween(a) {
      const i = d3.interpolate(this._current, a)
      this._current = i(0)
      return t => arc(i(t))
    }

    // create a faux div and store its virtual DOM in state.chart
    let faux = connectFauxDOM('div', 'chart')

    let svg
    if (render) {
      svg = d3
        .select(faux)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)
    } else if (resize) {
      svg = d3
        .select(faux)
        .select('svg')
        .attr('width', width)
        .attr('height', height)
        .select('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)
    } else {
      svg = d3.select(faux).select('svg').select('g')
    }

    let arcs = svg.selectAll('path').data(pie(data))
    arcs
      .enter()
      .append('path')
      .attr('class', (d, i) => `data-group data-group-${data[i].name}`)
      .attr('d', arc)
      .each(function(d) {
        // store the initial angles for transitions
        // do not use arrow function here as scope is the path element
        this._current = d
      })
      .on('mouseover', (d, i) => {
        clearTimeout(this.unsetTooltipTimeout)
        this.setTooltip(data[i].name)
      })
      .on('mouseout', (d, i) => {
        this.unsetTooltipTimeout = setTimeout(() => this.setTooltip(null), 200)
      })
    arcs.transition().attrTween('d', arcTween)
    animateFauxDOM(800)
  }
}

PieChart.defaultProps = {
  chart: LOADING
}

export default withFauxDOM(
  withD3Renderer({updateOn: ['data', 'thickness', 'title']})(PieChart)
)
