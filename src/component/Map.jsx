import { Box, InputBase, Paper, useMediaQuery } from '@mui/material'
import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = () => {
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinate ={lat:0, lng:0}
  return (
    <>
    <Box sx={{height:"80vh",width:"100%"}}>
      <GoogleMapReact
      bootstrapURLKeys={{key:process.env.API_KEY}}
      defaultCenter={coordinate}
      center={coordinate}
      defaultZoom={14}
      margin={[50,50,50,50]}
      options={''}
      onChange={''}
      onChildClick={''}

      >

      </GoogleMapReact>

    </Box>
    
    
    </>
  )
}

export default Map