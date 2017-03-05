import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { inputUpdate } from '../actions'

class ImageUploader extends Component {
  constructor(props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
  }
  onDrop(image) {
    console.log(image)
    this.props.inputUpdate('image', image)
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    )
  }
}

ImageUploader.propTypes = {
  inputUpdate: PropTypes.func.isRequired
}

export default connect(null, { inputUpdate })(ImageUploader)
