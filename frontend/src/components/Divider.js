import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Divider = ({ height, colorOnLight, colorOnDark }) => {
  return (
    <Box
      bg={useColorModeValue(colorOnLight, colorOnDark)}
      h={height}
      w="100%"
      borderRadius={'full'}
    />
  )
}

Divider.propTypes = {
  height: PropTypes.number,
  colorOnLight: PropTypes.string,
  colorOnDark: PropTypes.string
}

export default Divider
