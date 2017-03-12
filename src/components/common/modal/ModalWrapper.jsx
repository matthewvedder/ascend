import React, { PropTypes } from 'react'

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9999
  },
  content: {
    position: 'absolute',
    top: '7%',
    left: '7%',
    right: '7%',
    bottom: '7%',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none'
  },
  title: {
    color: '#33334d',
    fontFamily: 'Arial Black, Gadget, sans-serif'
  },
  close: {
    position: 'absolute',
    top: '9px',
    right: '20px',
    fontSize: '1.5em',
    color: 'gainsboro'
  }
}

const ModalWrapper = ({ children, hideModal }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) hideModal()
  }

  return (
    <div onClick={handleBackgroundClick} style={styles.overlay}>
      <div style={styles.content}>
        <span style={styles.close} onClick={hideModal}>x</span>
        { children }
      </div>
    </div>
  )
}

ModalWrapper.defaultProps = {
  visible: false,
  title: ''
}

ModalWrapper.propTypes = {
  title: PropTypes.string,
  hideModal: PropTypes.func.isRequired
}

export default ModalWrapper
