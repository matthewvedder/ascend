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
    outline: 'none',
    padding: '20px'
  },
  title: {
    color: '#33334d',
    fontFamily: 'Arial Black, Gadget, sans-serif'
  },
  close: {
    position: 'absolute',
    top: '7px',
    right: '12px',
    fontSize: '1.5em',
    color: 'gainsboro'
  }
}

const ModalWrapper = ({ title, children, hideModal }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) hideModal()
  }

  return (
    <div onClick={handleBackgroundClick} style={styles.overlay}>
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
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
