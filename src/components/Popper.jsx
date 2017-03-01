import React from 'react'
import { Popup } from 'react-leaflet'

const styles = {
  containerStyle: {
  },
  textStyle: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const Popper = ({ report }) => {
  console.log(report.title)
  const { containerStyle, textStyle } = styles
  return (
    <Popup style={containerStyle}>
      <span style={textStyle}>
        <h2>{ report.title }</h2>
        <p>{ report.description }</p>
      </span>
    </Popup>
  )
}

export default Popper
