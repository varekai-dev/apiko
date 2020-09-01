import React from 'react'
import T from 'prop-types'
import { iconsConfig } from './iconsConfig'

function Icon({ name, ...props }) {
  const IconC = iconsConfig[name]
  return <IconC {...props} />
}

Icon.propTypes = {
  name: T.string.isRequired,
  size: T.string,
  color: T.string
}
Icon.defaultProps = {
  size: '30px',
  color: '#000'
}
export default Icon
