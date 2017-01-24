import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Input from './common/Input'
import { inputUpdate } from '../actions'

const styles = {
  container: {
    display: 'flex',
    height: '80%',
    flexDirection: 'column',
    justifyContent: 'flexStart'
  },
  descriptionStyle: {
    flexGrow: 2,
    backgroundColor: 'lavender',
    marginTop: '5%',
    borderColor: 'white'
  },
  labelStyle: {
    marginTop: '5%'
  }
}

const ReportForm = ({ clickedLatlng, title, lat, lng, description, inputUpdate }) => (
  <div style={styles.container}>
    <Input
      type="text"
      id="title"
      label="Title"
      placeholder="Title"
      value={title}
      onChange={event => inputUpdate('title', event.target.value)}
    />
    <Input
      type="text"
      id="lat"
      label="Latitude"
      value={lat}
      defaultValue={clickedLatlng.lat}
      onChange={event => inputUpdate('lat', Number(event.target.value))}
    />
    <Input
      type="text"
      id="lng"
      label="Longitude"
      value={lng}
      onChange={event => inputUpdate('lng', Number(event.target.value))}
    />
    <label style={styles.labelStyle} htmlFor="description">Write your report here!</label>
    <textarea
      id="description"
      style={styles.descriptionStyle}
      label="Report Description"
      value={description}
      onChange={event => inputUpdate('description', event.target.value)}
    />
  </div>
)

ReportForm.propTypes = {
  clickedLatlng: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  inputUpdate: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const { title, lat, lng, description } = state.input
  const { clickedLatlng } = state.modal

  return { clickedLatlng, title, lat, lng, description }
}

export default connect(mapStateToProps, { inputUpdate })(ReportForm)
