import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from ".";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {

  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const data = fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`).then((data) => { setVideos(data.items) });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="Bold" mb={2} sx={{ color: 'white' }}>
        Showing results for <span style={{ color: '#f31503' }}> {searchTerm} </span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}


export default SearchFeed;