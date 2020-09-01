import React from 'react'
import './index.css'
import T from 'prop-types'

function Text({ size, children, onClick, ...props }) {
  return (
    <div className="text" {...{ onClick }} style={{ fontSize: size, ...props }}>
      {children}
    </div>
  )
}

Text.propTypes = {
  size: T.number,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired,
  onClick: T.func
}

Text.defaultProps = {
  size: '14px',
  children: '',
  onClick: () => null
}
export default Text
