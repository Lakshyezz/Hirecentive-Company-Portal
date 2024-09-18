
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { InstagramEmbed } from 'react-social-media-embed';

const StyledInstagramReel = ({ url, description }) => {
    return (
      <Card sx={{ maxWidth: 600, mb: 4, boxShadow: 3 }}>
        <InstagramEmbed url={url} width={328} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default StyledInstagramReel;
  