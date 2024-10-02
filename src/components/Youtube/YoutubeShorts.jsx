import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import ToggleListToGrid from "../ToggleListToGrid";
import AddBlogModal from "../Blog/AddBlogModal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DeleteIcon from "../../assets/DeleteIcon";
import EditIcon from "../../assets/EditIcon";

const YoutubeShorts = () => {
  // const videos = ['s7Btj9iq6No','5YkCFMJ6tCY' , "CpKXUFYWGr0", "fh7PeQYNZ_A"]; // Updated video IDs
  const [currentIndex, setCurrentIndex] = useState(0);

  const [videos, setVideos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    if (videos.length > 0 && currentIndex >= 0) {
      setCurrentVideo(videos[currentIndex]);
    } else {
      setCurrentVideo(null);
    }
  }, [currentIndex, videos]);

  const handleNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePreviousVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const handleAddVideo = (video) => {
    const newVideos = [...videos, video];
    setVideos(newVideos);
    setCurrentIndex(newVideos.length - 1);
  };

  const handleEditVideo = (updatedVideo) => {
    const updatedVideos = videos.map((video, i) =>
      i === currentIndex ? updatedVideo : video
    );
    setVideos(updatedVideos);
    setCurrentVideo(updatedVideo);
    setModalOpen(false);
  };

  const handleDeleteVideo = (videoToDelete) => {
    const newVideos = videos.filter((video) => video !== videoToDelete);
    setVideos(newVideos);

    if (newVideos.length > 0) {
      const newIndex =
        currentIndex >= newVideos.length ? newVideos.length - 1 : currentIndex;
      setCurrentIndex(newIndex);
      setCurrentVideo(newVideos[newIndex]);
    } else {
      setCurrentIndex(0);
      setCurrentVideo(null);
    }
  };

  const handleOpen = (video = null) => {
    setCurrentVideo(video);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setCurrentVideo(null);
  };

  // Styles
  const button = {
    display: 'flex',
    textAlign: 'center',
    backgroundColor: "white",
    color: "black",
    width:'150px',
    borderRadius: "8px",
    padding: '6px 4px'
  };
  // YouTube video
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0, // Hide controls
      modestbranding: 1,
      rel: 0, // Disable related videos at the end
      showinfo: 0, // Hide title
      fs: 0, // Disable full screen button
    },
  };

  return (
    <>
      <Container
        className="buttons"
        style={{ display: "flex",
         padding: "12px", 
         alignItems: "center",
         justifyContent: 'end',
      
          }}
      >
        {videos.length != 0 ? (
          <Container style={{display:'flex',  justifyContent: 'end'}}>
            <Button
              variant="text"
              color="error"
              style={{ padding: "8px 2px", backgroundColor: "red" }}
              onClick={() => handleDeleteVideo(currentVideo)}
            >
              <DeleteIcon />
            </Button>
            <Button
              variant="text"
              color ='info'
              style={{ padding: "8px 2px", backgroundColor: 'grey', marginLeft: '12px'}}
              onClick={() => handleOpen(currentVideo)}
            >
              <EditIcon />
            </Button>
          </Container>
        ) : <></>}
        <Button style={button} variant="contained" onClick={() => handleOpen()}>
          Add Url
        </Button>
      </Container>
      <Container
        sx={{
          height: videos.length != 0 ? "100vh" : "16vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: videos.length != 0 ? "#000" : "transparent",
          overflow: "hidden",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <IconButton
          onClick={handlePreviousVideo}
          sx={{ position: "absolute", left: 0, top: "50%", color: "white" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {videos.length != 0 ? (
            <YouTube
              videoId={videos[currentIndex].src}
              opts={{
                ...opts,
                height: "100%",
                width: "100%",
              }}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          ) : (
            <Typography style={{ color: "white" }}>
              {" "}
              ADD SOME VIDEOS BEFORE{" "}
            </Typography>
          )}

          <AddBlogModal
            open={modalOpen}
            handleClose={handleClose}
            handleAdd={handleAddVideo}
            handleEdit={handleEditVideo}
            currentBlog={currentVideo}
          />
        </Box>
        <IconButton
          onClick={handleNextVideo}
          sx={{ position: "absolute", right: 0, top: "50%", color: "white" }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Container>
    </>
  );
};

export default YoutubeShorts;
