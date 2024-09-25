import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Box, Container } from "@mui/material";

const YoutubeShorts = () => {
  const videos = ['s7Btj9iq6No','5YkCFMJ6tCY' , "CpKXUFYWGr0", "fh7PeQYNZ_A"]; // Updated video IDs
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false); // Prevent multiple rapid scrolls

  // YouTube player options for fullscreen video
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,  // Hide controls
      modestbranding: 1,
      rel: 0,  // Disable related videos at the end
      showinfo: 0, // Hide title
      fs: 0,  // Disable full screen button
    },
  };

  // Handle wheel event (scrolling)
  const handleWheel = (e) => {
    if (scrolling) return; // Prevent handling while transitioning
    setScrolling(true);

    const delta = e.deltaY;

    if (delta > 0) {
      // Scroll down - move to next video
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    } else if (delta < 0) {
      // Scroll up - move to previous video
      setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    }

    // Prevent rapid scrolling; delay to let the video load
    setTimeout(() => {
      setScrolling(false);
    }, 500); // Adjust this delay for sensitivity (500ms should feel natural)
  };

  

  useEffect(() => {
    // Attach the wheel scroll event
    window.addEventListener("wheel", handleWheel);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrolling]);

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        overflow: "hidden",
        position: "relative",
      }}
    >
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
        <YouTube
          videoId={videos[currentIndex]}
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
      </Box>
    </Container>
  );
};

export default YoutubeShorts;
