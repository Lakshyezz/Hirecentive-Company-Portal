import { useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Grid2,
  IconButton,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";

import HirecentiveLogo from "../src/assets/hirecentiveLogo.png";
import Twitter from "../src/assets/twitter.png";
import Instagram from "../src/assets/insta.png";
import LinkedIn from "../src/assets/linkedin.png";
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
import YoutubeShorts from "./components/Youtube/YoutubeShorts";
import EditIcon from "../src/assets/EditIcon";
import EditModal from "./components/Social/EditModal";

function App() {
  const [count, setCount] = useState(0);
  const [currentTab, setCurrentTab] = useState("4");
  const [isEditing, setIsEditing] = useState(false);
  const [companyOverview, setCompanyOverview] = useState(
    "Add your company overview here."
  );

  const isMobile = useMediaQuery("(max-width:600px)");
  const isLaptop = useMediaQuery("(max-width:1200px) and (min-width:600px)");
  const companyLogoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png";

  // styles
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
  const button = {
    color: "black",
    borderRadius: "8px",
    padding: "8px 0px",
    // align: 'end',
    backgroundColor: "white",
    margin: "12px 0px",
  };
  const paragraph = {
    fontSize: "18px",
    color: "white",
    fontWeight: "200",
  };

  // Social Code:
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [platform, setPlatform] = useState("");

  const [socialLinks, setSocialLinks] = useState({
    Instagram: "",
    LinkedIn: "",
    Twitter: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUrlChange = (event) => setUrl(event.target.value);
  const handlePlatformChange = (event) => setPlatform(event.target.value);

  const handleSubmit = () => {
    const updatedLinks = { ...socialLinks, [platform]: url };
    setSocialLinks(updatedLinks);
    handleClose();
  };

  // ENDS HERE

  const handleTabChange = (event, index) => setCurrentTab(index);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleTextChange = (e) => {
    setCompanyOverview(e.target.value);
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
             <Container style={{ display: 'flex', alignItems: 'center', gap: '12px'}}>
                <Typography style={subTitle}> Socials </Typography>
                  <EditModal
                      socialLinks={socialLinks}
                      setSocialLinks={setSocialLinks}
                    />
             </Container>
              <Container style={{ padding: '0px'}}>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  mt={4}
                  padding='0px'
                >
                  {socialLinks.Instagram ? (
                    <a
                      href={socialLinks.Instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Instagram}
                        alt="Instagram"
                        style={{ width: 40, height: 40, borderRadius: "8px" }}
                      />
                    </a>
                  ) : (
                    <img
                      src={Instagram}
                      alt="Instagram"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        opacity: 0.5,
                      }}
                    />
                  )}

                  {socialLinks.LinkedIn ? (
                    <a
                      href={socialLinks.LinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={LinkedIn}
                        alt="LinkedIn"
                        style={{ width: 40, height: 40, borderRadius: "8px" }}
                      />
                    </a>
                  ) : (
                    <img
                      src={LinkedIn}
                      alt="LinkedIn"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        opacity: 0.5,
                      }}
                    />
                  )}

                  {socialLinks.Twitter ? (
                    <a
                      href={socialLinks.Twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Twitter}
                        alt="Twitter"
                        style={{ width: 40, height: 40, borderRadius: "8px" }}
                      />
                    </a>
                  ) : (
                    <img
                      src={Twitter}
                      alt="Twitter"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        opacity: 0.5,
                      }}
                    />
                  )}
                </Box>
              </Container>
            </Container>
          </Container>
          <Container>
            {isEditing ? (
              <TextField
                minRows={4}
                value={companyOverview}
                onChange={handleTextChange}
                style={{
                  color: "white",
                  border: "1px solid lightgrey",
                  borderRadius: "12px",
                  width: "100%",
                }}
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                variant="outlined"
                multiline
                fullWidth
              />
            ) : (
              <p style={paragraph}>{companyOverview}</p>
            )}
            <Button
              onClick={isEditing ? handleSaveClick : handleEditClick}
              style={button}
            >
              {isEditing ? "Save" : <EditIcon />}
            </Button>
          </Container>

          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={currentTab}>
              <TabList onChange={handleTabChange}>
                <Tab label="Blogs" value="1" style={paragraph} />
                <Tab label="Youtube" value="2" style={paragraph} />
                <Tab label="Reels" value="3" style={paragraph} />
                <Tab label="Shorts" value="4" style={paragraph} />
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
              <TabPanel value="4">
                <YoutubeShorts />
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </Paper>
    </Grid2>
  );
}

export default App;
