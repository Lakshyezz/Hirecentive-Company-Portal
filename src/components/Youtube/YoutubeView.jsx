import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import { useSwipeable } from "react-swipeable";
import ToggleListToGrid from "../ToggleListToGrid";
import YoutubeListView from "./YoutubeList";
import AddBlogModal from "../Blog/AddBlogModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "../../assets/DeleteIcon";

// Styles
const button = {
  backgroundColor: "white",
  color: "black",
  height: "40px",
  borderRadius: "8px",
};

const YoutubeView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listView, setListView] = useState(false);

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

  const handleSwipedUp = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % videos.length;
      return newIndex;
    });
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

  const handleDeleteVideo = (index) => {
    const newVideos = videos.filter((_, i) => i !== index);
    setVideos(newVideos);

    const newIndex = index >= newVideos.length ? newVideos.length - 1 : index;
    setCurrentIndex(newIndex);
    setCurrentVideo(newVideos[newIndex] || null);
  };

  const handleOpen = (index = null) => {
    if (index !== null) {
      setCurrentVideo(videos[index]);
      setCurrentIndex(index);
    } else {
      setCurrentVideo(null);
    }
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setCurrentVideo(null);
  };

  const handlers = useSwipeable({
    onSwipedUp: handleSwipedUp,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "10px",
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: "20px",
        }}
      >
        <Button style={button} variant="contained" onClick={() => handleOpen()}>
          Add Video Url
        </Button>
        <ToggleListToGrid listView={listView} setListView={setListView} />
      </Container>

      <Grid>
        {listView ? (
          <YoutubeListView
            videos={videos}
            handleOpen={handleOpen}
            handleDeleteVideo={handleDeleteVideo}
          />
        ) : (
          <Container {...handlers} style={{ padding: "20px 50px" }}>
            <Box display="flex" justifyContent="center" alignItems="center">
              {currentVideo ? (
                <VideoPlayer videoId={currentVideo.src} listView={false} />
              ) : (
                <Typography color="lightgrey" fontWeight={500}>
                  Nothing Here, add some videos
                </Typography>
              )}
            </Box>
            {videos.length != 0 && (
              <Container
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  gap: "8px",
                  padding: "0px",
                }}
              >
                <span
                  className="edit"
                  onClick={() => handleOpen(currentIndex)}
                  style={{
                    backgroundColor: "grey",
                    padding: "4px 4px",
                    display: "inline",
                    alignItems: "center",
                    borderRadius: "4px",
                  }}
                >
                  <EditIcon fontSize="4px" sx={{ color: "white" }} />
                </span>
                <span
                  onClick={handleDeleteVideo}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#B50B00",
                    padding: "4px 4px",
                    display: "inline",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "4px",
                  }}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </span>
              </Container>
            )}
          </Container>
        )}
      </Grid>

      <AddBlogModal
        open={modalOpen}
        handleClose={handleClose}
        handleAdd={handleAddVideo}
        handleEdit={handleEditVideo}
        current={currentVideo}
      />
    </Container>
  );
};

export default YoutubeView;
