import { useState } from "react";
import {
  Container,
  CssBaseline,
  Grid,
  Grid2,
  Paper,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";

import HirecentiveLogo from "../src/assets/hirecentiveLogo.png";
import TwitterImg from "../src/assets/twitter.png";
import InstaImg from "../src/assets/insta.png";
import LinkedInImg from "../src/assets/linkedin.png";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import BlogView from "./components/Blog/BlogView";
import YoutubeView from "./components/Youtube/YoutubeView.jsx";
import Reels from "./components/Reels/Reel";

function App() {
  const [count, setCount] = useState(0);
  const [currentTab, setCurrentTab] = useState("3");

  const isMobile = useMediaQuery("(max-width:600px)");
  const isLaptop = useMediaQuery("(max-width:1200px) and (min-width:600px)");
  const companyLogoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png";

  // console.log("isMobile => " + isMobile);

  const handleTabChange = (event, index) => setCurrentTab(index);

  const paper = {
    padding: "20px 20px",
    textAlign: "center",
    backgroundColor: "rgb(29, 0, 66)",
    height: "80%",
    margin: "0px auto",
    border: "2px solid #ae7ec5",
    overflow: "hidden",
    borderRadius: "15px",
    width: isMobile ? "95%" : isLaptop ? "100%" : "52%",
  };
  const title = {
    fontSize: "32px",
    color: "white",
    fontWeight: "bold",
  };
  const subTitle = {
    fontSize: "24px",
    color: "white",
    fontWeight: "200",
  };

  const paragraph = {
    fontSize: "18px",
    color: "white",
    fontWeight: "200",
  };

  return (
    <Grid2
      style={{
        padding: "30px",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #3d327e, #482c85, #57288d, #632394, #6e1e9c)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 12px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1.5px solid #ae7ec5",
          }}
        >
          {/* <RouterLink to="/" style={{ zIndex: 1 }}>
              <ArrowBackIcon style={{ color: "white" }} />
            </RouterLink> */}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src={HirecentiveLogo}
            alt="Logo"
            style={{
              borderRadius: ".25rem",
              maxHeight: "60px",
              maxWidth: "100%",
              marginBottom: "5px",
            }}
          />
        </div>
      </div>

      <Paper elevation={10} style={paper}>
        {/* <Container style={{ height: 900, width: 900, backgroundColor: 'orange'}}/> */}
        <Container
          className="company-wrapper"
          style={{ display: "flex", gap: "40px", flexDirection: "column" }}
        >
          <Container
            className="company-header"
            style={{ display: "flex", gap: "40px" }}
          >
            <img
              className="company-logo"
              src={companyLogoUrl}
              alt="Logo"
              style={{ borderRadius: ".25rem", maxHeight: "150px" }}
            />

            <Container
              className="company-details"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "start",
              }}
            >
              <Typography style={title}> Notion </Typography>
              <Typography style={subTitle}> Notion Labs, Inc </Typography>
            </Container>

            <Container
              className="hirecentive-logo/social"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Typography style={subTitle}> Contact Us </Typography>
              <Container
                className="socials"
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={TwitterImg}
                  alt="Logo"
                  style={{ borderRadius: ".25rem", maxHeight: "35px" }}
                />
                <img
                  src={InstaImg}
                  alt="Logo"
                  style={{ borderRadius: ".25rem", maxHeight: "30px" }}
                />
                <img
                  src={LinkedInImg}
                  alt="Logo"
                  style={{ borderRadius: ".25rem", maxHeight: "30px" }}
                />
              </Container>
            </Container>
          </Container>
          <Typography style={paragraph}>
            Notion is a project management and note-taking software. Notion is a
            software designed to help members of a company or organization
            coordinate deadlines, objectives, and assignments for the sake of
            efficiency and productivity. It can be used as an all-in-one
            note-taking app. It offers a lot of features such as integrating
            third-party tools and hosting the pages as web pages.
          </Typography>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={currentTab}>
              <TabList onChange={handleTabChange}>
                <Tab label="Blogs" value="1" style={paragraph} />
                <Tab label="Youtube" value="2" style={paragraph} />
                <Tab label="Reels" value="3" style={paragraph} />
                <Tab label="Shorts" value="4" style={paragraph} />
                <Tab label="Linkedin Shorts" value="5" style={paragraph} />
              </TabList>

              <TabPanel color="white" value="1">
                <BlogView />
              </TabPanel>

              <TabPanel value="2">
                <YoutubeView />
              </TabPanel>
              <TabPanel value="3"> 
                <Reels />
              </TabPanel>
              <TabPanel value="4"> Shorts</TabPanel>
              <TabPanel value="5"> Linkedin Shorts</TabPanel>
            </TabContext>
          </Box>
        </Container>
      </Paper>
    </Grid2>
  );
}

export default App;
