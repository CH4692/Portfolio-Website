import { Box } from '@mui/material'
import React from 'react'

const Feed = (props) => {
  return (
  <Box bgcolor='green' flex={6} p={2}>
    {props.children}
  </Box>
  )
}

export default Feed