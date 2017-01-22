import React, { PropTypes } from 'react'

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5%'
  },
  labelStyle: {
    alignSelf: 'flex-start',
    paddingBottom: '2%'
  }
}

const { containerStyle, labelStyle } = styles

const Input = ({ type, id, placeholder, defaultValue, label, style }) => (
  <div style={containerStyle}>
    <label style={labelStyle} htmlFor={id}>{ label }</label>
    <input
      style={styles}
      type={type}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  </div>
)

Input.defaultProps = {
  type: '',
  id: '',
  placeholder: '',
  defaultValue: '',
  label: ''
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
}

export default Input
