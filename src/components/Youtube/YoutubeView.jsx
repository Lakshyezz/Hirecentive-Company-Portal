import React, { useState } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import { useSwipeable } from 'react-swipeable';
import ToggleListToGrid from "../ToggleListToGrid";
import YoutubeListView from "./YoutubeList";
import AddBlogModal from "../Blog/AddBlogModal";

const YoutubeView = () => {
  const [index, setIndex] = useState(0);
  const [listView, setListView] = useState(false);

  const [videos, setVideos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);


  // const videos = [   // Replace with your own video IDs
  //  {
  //   id:  "uGegWjcNylU",
  //   title: 'Notion AI is here!',
  //   desciption: 'Notion AI is here!',
  //  },
  //  {
  //   id:  "qMkw5j2Stb4",
  //   title: 'Think it. Make it.',
  //  },
  //  {
  //   id:  "qjKNj146Bfw",
  //   title: 'Meet Q&A: Answers now, not later',
  //  },
  // ];

  // const extractVideoID = url => url.split('youtu.be/')[1]?.substring(0, 11) || null;


  const handleSwipedUp = () => {
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handleAddVideo = (video) => {

    setVideos([...videos, video]);
  };
  
  const handleEditVideo = (updatedVideo) => {
    setVideos(videos.map(video => video === currentVideo ? updatedVideo : video));
    setCurrentVideo(null);
  };
  
  const handleDeleteVideo = (videoToDelete) => {
    setVideos(videos.filter(video => video !== videoToDelete));
  };
  
  const handleOpen = (video = null) =>{
    // console.log("video  " + video.src);
    setCurrentVideo(video);
     setModalOpen(true);
    }
  const handleClose = () =>{
     setModalOpen(false);
     setCurrentVideo(null);
    }
  
    // console.log("List => " + JSON.stringify(videos));
    console.log("in YoutubeView toggle => " + JSON.stringify(listView));

  const handlers = useSwipeable({
    onSwipedUp: handleSwipedUp,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
        
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>
         Add Video Url
        </Button>

        <ToggleListToGrid listView={listView} setListView={setListView}/>
      <Grid>

        {listView  ? <YoutubeListView videos={videos}/>
        : <Container {...handlers} style={{ height: '100%', padding: '20px 50px'}}>
            <Box display="flex" justifyContent="center" alignItems="center" >
              {videos.length != 0 ? <VideoPlayer videoId={videos[index].src} listView={false}/> : <Container>Nothing Here add some videos</Container>}
            </Box>
        </Container> }
      </Grid>

      <AddBlogModal  open={modalOpen} handleClose={handleClose} handleAddBlog={handleAddVideo} editBlog={handleEditVideo} currentBlog={currentVideo}/>
    </Container>
  );
};

export default YoutubeView;
