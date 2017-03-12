import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Input from './common/Input'
import Button from './common/Button'
import Dropdown from './common/Dropdown'
import ImageUploader from './ImageUploader'
import { inputUpdate } from '../actions'

const styles = {
  mainContainer: {
    padding: '2em',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  inputContainer: {
    flexGrow: 1
  },
  descriptionStyle: {
    //flexGrow: 2,
    height: '35%',
    backgroundColor: 'lavender',
    marginTop: '5%',
    borderColor: 'white',

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
  activity,
  description,
  route,
  area,
  region,
  onSubmit,
  inputUpdate
}) => (

  <div style={styles.mainContainer}>
    <div style={styles.topContainer}>
      <ImageUploader />
      <div style={styles.inputContainer}>
        <Input
          type="text"
          id="title"
          label="Title"
          placeholder="Title"
          value={title}
          onChange={event => inputUpdate('title', event.target.value)}
        />
        <Dropdown
          name="activity"
          label="Activity"
          value={activity}
          options={[
            { value: 'Rock Climbing', label: 'Rock Climbing' },
            { value: 'Hiking', label: 'Hiking' },
            { value: 'Skiing', label: 'Skiing' },
            { value: 'Ice Climbing', label: 'Ice Climbing' },
            { value: 'Mountaineering', label: 'Mountaineering' }
          ]}
        />
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
          value={region}
          onChange={event => inputUpdate('region', event.target.value)}
        />
      </div>
    </div>
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
  const { title, image, activity, lat, lng, description, route, area, region } = state.input

  return { title, image, activity, lat, lng, description, route, area, region }
}

export default connect(mapStateToProps, { inputUpdate })(ReportForm)
