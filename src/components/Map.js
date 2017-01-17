import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { showCreateReport } from '../actions'

const position = [44.2706, -71.3033]
const styles = {
  mapStyle: {
    height: window.screen.height,
  },
}

class MyMap extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false, clickLatLng: {} }
    this.onMapClick = this.onMapClick.bind(this)
  }

  onMapClick(e) {
    this.setState({ showModal: true, clickLatLng: e.latlng })
    this.props.onMapClick()
  }

  render() {
    const { showModal, clickLatLng } = this.state
    const accessToken = 'pk.eyJ1IjoidmVkZHN0ZXIiLCJhIjoiY2lyNzdlanUzMDBza2djbTM1Z2hlYTdnNSJ9.FpydM0KRrrunXzaHJYCmrA'

    return (
      <div>
        <Map onClick={this.onMapClick} style={styles.mapStyle} center={position} zoom={11}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/veddster/cire76fb60003g9njs0l9hf9k/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`}
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

const mapStateToProps = (state) => {
  return state.modal
}

export default connect(mapStateToProps, showCreateReport)(MyMap)
