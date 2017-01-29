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

const Button = ({ onClick, children }) => (
  <button style={styles} onClick={onClick}>
    { children }
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button
