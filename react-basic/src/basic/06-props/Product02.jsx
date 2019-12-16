import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Product02 extends Component {
  static propTypes = {
    name: PropTypes.oneOfType(
      [PropTypes.string.isRequired, PropTypes.number]
    ),
    city: PropTypes.arrayOf(PropTypes.string)
  }
  render() {
    console.log(this.props)
    console.log(PropTypes);
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
