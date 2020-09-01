import React from 'react'
import './index.css'
import T from 'prop-types'

function Text({ size, children, ...props }) {
  return (
    <div className="text" style={{ fontSize: size, ...props }}>
      {children}
    </div>
  )
}

Text.propTypes = {
  size: T.number,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired
}

Text.defaultProps = {
  size: '14px',
  children: ''
}
export default Text
