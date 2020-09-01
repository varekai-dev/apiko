import React from 'react'

const withCheckedStyles = (WrappedComponent) => (props) => {
  const {
    todo: { completed }
  } = props
  const additionalStyles = completed
    ? {
        color: 'red',
        textDecoration: 'line-through'
      }
    : {}
  return <WrappedComponent {...{ additionalStyles, ...props }} />
}

export default withCheckedStyles
