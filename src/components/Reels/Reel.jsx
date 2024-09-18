import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import StyledInstagramReel from './ReelView';

const reelsData = [
  {
    id: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'Nature`s beauty, sweeter than words 🍃✨',
  },
  {
    id: 2,
    videoUrl: 'https://www.instagram.com/p/C-epWacRMZu',
    description: 'Initial D',
  },
  {
    id: 3,
    videoUrl: 'https://www.instagram.com/p/C-lhWxSMPcY',
    description: 'He comes face to face with a blue whale...🐋',
  },
  // Add more reels as needed
];

const Reel = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Instagram Reels
        </Typography>
        {reelsData.map((reel) => (
          <StyledInstagramReel key={reel.id} url={reel.videoUrl} description={reel.description} />
        ))}
      </Box>
    </Container>
  );
};

export default Reel;
