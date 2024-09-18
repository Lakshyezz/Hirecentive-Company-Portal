import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import { useSwipeable } from 'react-swipeable';
import ToggleListToGrid from "../ToggleListToGrid";
import YoutubeListView from "./YoutubeListView";

const YoutubeView = () => {
  const [index, setIndex] = useState(0);
  const [listView, setListView] = useState(false);

  const videoIds = [   // Replace with your own video IDs
   {
    id:  "RDZ3mY10zY8",
    title: 'Notion AI is here!',
    description: 'Notion does a great job. But, I would appreciate very much if you add Functions like Flashcards with spaced repetition and active recall for students.',
   },
   {
    id:  "qMkw5j2Stb4",
    title: 'Think it. Make it.',
    description: 'Turn ideas into action with Notion’s AI-powered workspace.',
   },
   {
    id:  "qjKNj146Bfw",
    title: 'Meet Q&A: Answers now, not later',
    description: 'Knowledge, answers, ideas. One click away. Try Q&A in Notion today at notion.ai. Follow us everywhere @NotionHQ ',
   },
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

     {!listView && <Container {...handlers} style={{ height: '100%', padding: '20px 50px'}}>
        <Box display="flex" justifyContent="center" alignItems="center" >
          <VideoPlayer videoId={videoIds[index].id} listView={false}/>
        </Box>
      </Container>}

      {listView && <YoutubeListView videoData={videoIds}/>}
    </Container>
  );
};

export default YoutubeView;
