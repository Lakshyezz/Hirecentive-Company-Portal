import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import VideoPlayer from './VideoPlayer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const YoutubeListView = ({ videos, handleOpen, handleDeleteVideo }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {videos.length !== 0 ? videos.map((video, index) => (
        <Grid container spacing={4} style={{ backgroundColor: 'transparent' }} key={index}>
          <Grid item>
            <VideoPlayer videoId={video.src} listView={true} />
          </Grid>
          <Grid item xs container direction="column" alignItems='start' justifyContent={'center'} gap={2} spacing={2}>
            <Typography color='lightgrey' fontWeight={500} gutterBottom variant="subtitle1" component='p'>
              {video.title}
            </Typography>
            <Typography color='white' variant="body2" gutterBottom>
              {video.description}
            </Typography>
            <Box display="flex" alignItems="center" gap="8px">
              <IconButton onClick={() => handleOpen(index)} style={{ backgroundColor: 'grey', padding: '4px', borderRadius: "4px" }}>
                <EditIcon sx={{ color: 'white' }} />
              </IconButton>
              <IconButton onClick={() => handleDeleteVideo(index)} style={{ backgroundColor: '#B50B00', padding: '4px', borderRadius: "4px" }}>
                <DeleteIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      )) : <Typography> Add some videos</Typography>}
    </Box>
  )
}

export default YoutubeListView;
