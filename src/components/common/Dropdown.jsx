import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { inputUpdate } from '../../actions'

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '3%',
    marginLeft: '4em',
    marginRight: '4em'
  },
  selectStyle: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '1em',
    outline: 'none',
    color: 'black',
    borderRadius: 0
  }
}

const Dropdown = (props) => {
  const { name, value, label, options } = props
  return (
    <div style={styles.containerStyle}>
      <div>{ label }</div>
      <Select
        style={styles.selectStyle}
        name="form-field-name"
        value={value}
        options={options}
        onChange={(val) => { props.inputUpdate(name, val) }}
      />
    </div>
  )
}

Dropdown.defaultProps = {
  label: null
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  inputUpdate: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string
}


export default connect(null, { inputUpdate })(Dropdown)
