import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import VideoPlayer from './VideoPlayer';

const YoutubeListView = ({ videos }) => {

  console.log("YoutubeListView => " + JSON.stringify(videos));

  return (
    <Box sx={{ flexGrow: 1,}}>
    {videos.length != 0 ? videos.map((video, index) => (

        <Grid container spacing={4} style={{ backgroundColor: 'transparent'}}>

          <Grid item>
            {/* <img src={video.img} alt={video.title} width={150} /> */}
            <VideoPlayer videoId={video.src} listView={true}/>

          </Grid>



            <Grid item xs container direction="column" alignItems='start' justifyContent={'center'} gap={2} spacing={2} >
                <Typography color='white' gutterBottom variant="subtitle1" component ='p'>
                  {video.title}
                </Typography>
                <Typography color='white' variant="body2" gutterBottom>
                  {video.description}
                </Typography>
            </Grid>

        </Grid>
    )) :  <Typography> Add some videos</Typography>}
  </Box>
  )
}

export default YoutubeListView