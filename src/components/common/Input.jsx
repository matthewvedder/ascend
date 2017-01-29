import React, { PropTypes } from 'react'

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5%'
  },
  labelStyle: {
    alignSelf: 'flex-start',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '1em'
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

export default Input
