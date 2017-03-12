import React, { PropTypes } from 'react'
import Radium from 'radium'

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '.7em',
    marginLeft: '4em',
    marginRight: '4em'
  },
  labelStyle: {
  },
  inputStyle: {
    padding: '.4em',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '1em',
    outline: 'none',
    color: 'black',
  }
}

const { containerStyle, labelStyle } = styles

const Input = ({ type, id, placeholder, label, value, onChange }) => (
  <div style={containerStyle}>
    <label style={labelStyle} htmlFor={id}>{ label }</label>
    <input
      style={styles.inputStyle}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
)

Input.defaultProps = {
  type: '',
  id: '',
  placeholder: '',
  label: '',
  value: ''
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}

export default Radium(Input)
