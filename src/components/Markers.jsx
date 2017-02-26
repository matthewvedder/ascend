import React, { Component, PropTypes } from 'react'
import { Marker, Popup } from 'react-leaflet'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { fetchReportsSuccess } from '../actions'

class Markers extends Component {
  constructor(props) {
    super(props)
    this.renderReports = this.renderMarkers.bind(this)
    firebase.database().ref('/reports')
      .on('value', (snapshot) => { props.fetchReportsSuccess(snapshot.val()) })
  }

  renderMarkers() {
    const reports = this.props.reports
    const markers = Object.keys(reports).map((key) => {
      const { lat, lng } = reports[key]
      return (
        <Marker key={key} position={[lat, lng]}>
          <Popup><span>HIIIEEE!</span></Popup>
        </Marker>
      )
    })
    return markers
  }

  render() {
    return <span>{ this.renderMarkers() }</span>
  }
}

Markers.propTypes = {
  fetchReportsSuccess: PropTypes.func.isRequired,
  reports: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ reports: state.reports.reports })

export default connect(mapStateToProps, { fetchReportsSuccess })(Markers)
