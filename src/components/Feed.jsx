import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos, Sidebar } from ".";

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect( ()=> {
    const data = fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>{setVideos(data.items)});
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body1" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="Bold" mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#f31503' }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>

    </Stack>
  );
}


export default Feed