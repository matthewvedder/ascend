import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ImageUploader from './ImageUploader'
import Input from './common/Input'
import Button from './common/Button'
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

const ReportForm = ({
  title,
  image,
  lat,
  lng,
  description,
  route,
  area,
  region,
  onSubmit,
  inputUpdate
}) => (

  <div style={styles.container}>
    <Input
      type="text"
      id="title"
      label="Title"
      placeholder="Title"
      value={title}
      onChange={event => inputUpdate('title', event.target.value)}
    />
    <ImageUploader />
    <Input
      type="text"
      id="route"
      label="Route"
      placeholder="Flying Buttress"
      value={route}
      onChange={event => inputUpdate('route', event.target.value)}
    />
    <Input
      type="text"
      id="area"
      label="Area"
      placeholder="The Beer Walls"
      value={area}
      onChange={event => inputUpdate('area', event.target.value)}
    />
    <Input
      type="text"
      id="region"
      label="Region"
      placeholder="Adirondacks"
      value={area}
      onChange={event => inputUpdate('region', event.target.value)}
    />
    <Input
      type="text"
      id="lat"
      label="Latitude"
      value={lat}
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
    <Button
      onClick={() => onSubmit({ values: { title, lat, lng, description }, image })}
    >
      Create
    </Button>
  </div>
)

ReportForm.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  inputUpdate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { title, image, lat, lng, description, route, area, region } = state.input
  console.log(image)

  return { title, image, lat, lng, description, route, area, region }
}

export default connect(mapStateToProps, { inputUpdate })(ReportForm)
