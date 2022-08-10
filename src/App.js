import React from 'react'
import List from './component/List'
import Map from './component/Map'
import Navbar from './component/Navbar'
import PlaceDetails from './component/PlaceDetails'
import Grid from '@mui/material/Grid'
import { CssBaseline } from '@mui/material'

const App = () => {
  return (
  <> 
  <CssBaseline/>
  <Navbar/>
  <Grid container spacing={3} sx={{width:"100%"}}>
    <Grid item xs={12} md={4}>
      <List/>


    </Grid>
    <Grid item xs={12} md={4}>
      <Map/>

    </Grid>
    
  </Grid>
  
  
  </>
  )
}

export default App