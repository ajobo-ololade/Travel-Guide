import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Autocomplete } from '@react-google-maps/api'
import { Box, InputBase } from '@mui/material'
import { Search} from '@mui/icons-material'
import "./style1.css"

const Navbar = () => {
  return (
    <>
   <AppBar position="static" sx={{backgroundColor:'purple'}}>
     <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
       <Typography variant="h5" sx={{display:{xs:'none',sm:'block'}}}>
        Travel Guide
       </Typography>
       <Box sx={{display:"flex"}}>
       <Typography variant="h6"  sx={{display:{xs:'none',sm:'block'}}} className="me-3">
       Explore new places
       </Typography>
       {/* <Autocomplete> */}
        <Box className='search' sx={{position:'relative',borderRadius:"10px",width:{xs:'auto',sm:"20"}}} >
            <Box className='searchcon' sx={{color:"purple"}}>
                <Search/>   
            </Box>
            <InputBase placeholder='Search...' sx={{color:"inherit", left:'50px',color:"purple"}}/>
        </Box>
       {/* </Autocomplete> */}

       </Box>
    
     </Toolbar>
   </AppBar>
    </>
  )
}

export default Navbar