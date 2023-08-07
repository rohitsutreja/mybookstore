import React from 'react'
import {Box, ListItemButton, ListItemText} from '@mui/material'

const Sidebar = () => {
  return (
 <>
 <Box flex ={1} p={2} sx ={{bgcolor: "#D8D9DA" , color:"#61677A"}}>
<Box sx = {{position: "fixed"}}>

<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Fiction" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Self-Help" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Science" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Biography" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Childrens" />
</ListItemButton>
  </Box>
</Box>
 </>
  )
}

export default Sidebar
