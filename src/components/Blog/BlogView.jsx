import React, { useState } from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GridIcon from "../../assets/GridIcon";
import ListIcon from "../../assets/ListIcon";
import ToggleListToGrid from "../ToggleListToGrid";

const images = [
  {
    src: "https://img.youtube.com/vi/oTahLEX3NXo/maxresdefault.jpg",
    title: "What is Notion?",
  },
  {
    src: "https://img.youtube.com/vi/O8qdvSxDYNY/maxresdefault.jpg",
    title: "Creating a Database",
  },
  {
    src: "https://img.youtube.com/vi/-vLeXjO3aKU/maxresdefault.jpg",
    title: "Using database views",
  },
  {
    src: "https://img.youtube.com/vi/uYzY7W-CofA/maxresdefault.jpg",
    title: "Using linked databases",
  },
  {
    src: "https://img.youtube.com/vi/oTahLEX3NXo/maxresdefault.jpg",
    title: "What is Notion?",
  },
  {
    src: "https://img.youtube.com/vi/O8qdvSxDYNY/maxresdefault.jpg",
    title: "Creating a Database",
  },
  {
    src: "https://img.youtube.com/vi/-vLeXjO3aKU/maxresdefault.jpg",
    title: "Using database views",
  },
  {
    src: "https://img.youtube.com/vi/uYzY7W-CofA/maxresdefault.jpg",
    title: "Using linked databases",
  },
  {
    src: "https://img.youtube.com/vi/oTahLEX3NXo/maxresdefault.jpg",
    title: "What is Notion?",
  },
];

const BlogView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [listView, setListView] = useState(false);

  const wrapper = {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: 20,
  };
  const title = {
    color: 'white'
  }

  return (
    <Container style={wrapper}>


      <ToggleListToGrid listView={listView}  setListView={setListView}/>
      {/* <span style={iconContainer} onClick={toggleListView}>

        <GridIcon show={listView}/>
        <ListIcon show={listView}/>

      </span> */}
      <Grid container spacing={2} direction={isMobile ? "column" : "row"}>

        {listView ? images.map((image, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <img
              src={image.src}
              alt={image.title}
              style={{ width: "100%", borderRadius: 8 }}
            />
            <Typography variant="subtitle1" align="center" style={title}>
              {image.title}
            </Typography>
          </Grid>
        )):   <List>
          {images.map((item, index) => (
            <ListItem key={index} style={{ display: 'flex' , flexDirection: 'column', gap: 8, marginBottom: '20px', }}>
                <img

                  src={item.src}
                  alt={item.title}
                  style={{ width: "80%",borderRadius: 8 }}
                />
                <Typography variant="subtitle1" align="center"  style={title}>
                  {item.title}
                </Typography>
            </ListItem>
          ))}
        </List>}

      </Grid>

    </Container>
  );
};

export default BlogView;
