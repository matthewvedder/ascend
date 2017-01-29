import React, { PropTypes } from 'react'

const styles = {
  border: 0,
  alignSelf: 'center',
  marginTop: '1em',
  fontFamily: 'Arial Black, Gadget, sans-serif',
  fontSize: '1em',
  color: '#33334d',
  backgroundColor: 'lavender'
}

const Button = ({ onClick, stylesFromProp, children }) => (
  <button style={{ ...styles, ...stylesFromProp }} onClick={onClick}>
    { children }
  </button>
)

Button.defaultProps = {
  stylesFromProp: {}
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  stylesFromProp: PropTypes.object
}

export default Button
