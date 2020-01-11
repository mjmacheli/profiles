import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ style }) => <header><h1 style={style}>Profiles App</h1></header>

Header.propTypes = {
    style: PropTypes.style,
}
export default Header
