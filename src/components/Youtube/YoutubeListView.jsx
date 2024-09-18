import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import VideoPlayer from './VideoPlayer';

const YoutubeListView = ({ videoData }) => {

// const videoData = [
//     {
//         img: 'https://via.placeholder.com/150',
//         title: 'Sample Video Title',
//         description: 'This is a description of the video.',
//     },
//     // Add more video objects here
//     ];


  return (
    <Box sx={{ flexGrow: 1,}}>
    {videoData.map((video, index) => (

        <Grid container spacing={4} style={{ backgroundColor: 'transparent'}}>

          <Grid item>
            {/* <img src={video.img} alt={video.title} width={150} /> */}
            <VideoPlayer videoId={video.id} listView={true}/>
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
    ))}
  </Box>
  )
}

export default YoutubeListView