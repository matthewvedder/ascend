import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { showCreateReport, inputUpdate } from '../actions'


const position = [44.2706, -71.3033]
const styles = {
  mapStyle: {
    height: window.screen.height,
  },
}

class MyMap extends Component {
  constructor(props) {
    super(props)
    this.onMapClick = this.onMapClick.bind(this)
  }

  onMapClick(event) {
    const { latlng } = event
    const { showCreateReport, inputUpdate } = this.props

    showCreateReport(latlng)
    inputUpdate('lat', latlng.lat)
    inputUpdate('lng', latlng.lng)
  }

  render() {
    // This needs to be hidden
    const accessToken = 'pk.eyJ1IjoidmVkZHN0ZXIiLCJhIjoiY2lyNzdlanUzMDBza2djbTM1Z2hlYTdnNSJ9.FpydM0KRrrunXzaHJYCmrA'
    const url = 'https://api.mapbox.com/styles/v1/veddster/cire76fb60003g9njs0l9hf9k/tiles/256/'

    return (
      <div>
        <Map onClick={this.onMapClick} style={styles.mapStyle} center={position} zoom={11}>
          <TileLayer
            url={`${url}{z}/{x}/{y}?access_token=${accessToken}`}
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup.<br />Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

MyMap.propTypes = {
  showCreateReport: PropTypes.func.isRequired,
  inputUpdate: PropTypes.func.isRequired
}

const mapStateToProps = state => (state.modal)

export default connect(mapStateToProps, { showCreateReport, inputUpdate })(MyMap)
