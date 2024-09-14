import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import { useSwipeable } from 'react-swipeable';
import ToggleListToGrid from "../ToggleListToGrid";

const YoutubeView = () => {
  const [index, setIndex] = useState(0);
  const [listView, setListView] = useState(false);
  const videoIds = [
    "RDZ3mY10zY8", // Replace with your own video IDs
    "qMkw5j2Stb4",
    "qjKNj146Bfw",
  ];

  const handleSwipedUp = () => {
    setIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };


  console.log('listView => ' + listView);

  const handlers = useSwipeable({
    onSwipedUp: handleSwipedUp,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
        <ToggleListToGrid listView={listView} setListView={setListView}/>

      <Container {...handlers} style={{ height: '100%', padding: '20px 50px'}}>
        <Box display="flex" justifyContent="center" alignItems="center" >
          <VideoPlayer videoId={videoIds[index]} />
        </Box>
      </Container>
    </Container>
  );
};

export default YoutubeView;
