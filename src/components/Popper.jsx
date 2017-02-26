import React from 'react'
import { Popup } from 'react-leaflet'

const Popper = (report) => {
  return (
    <Popup>
      <span>
        { JSON.stringify(report) }
      </span>
    </Popup>
  )
}

export default Popper
