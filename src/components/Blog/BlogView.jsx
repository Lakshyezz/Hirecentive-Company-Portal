import React, { useState } from "react";
import {
  Button,
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
import AddBlogModal from "./AddBlogModal";
import EditIcon from '@mui/icons-material/Edit';

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

  
  const [blogs, setBlogs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  
  
  const handleAddBlog = (blog) => {
    setBlogs([...blogs, blog]);
    // console.log('blog => ' + blog);
    
  };
  
  const handleEditBlog = (updatedBlog) => {
    // console.log("updatedBlog  " + updatedBlog);
    setBlogs(blogs.map(blog => blog === currentBlog ? updatedBlog : blog));
    setCurrentBlog(null);
  };
  
  const handleDeleteBlog = (blogToDelete) => {
    setBlogs(blogs.filter(blog => blog !== blogToDelete));
  };
  
  const handleOpen = (blog = null) =>{
    // console.log("blog  " + blog.src);
    setCurrentBlog(blog);
     setModalOpen(true);
    }
  const handleClose = () =>{
     setModalOpen(false);
     setCurrentBlog(null);
    //  console.log('blogs list => ' + blogs);
    }

    console.log("toggle => " + JSON.stringify(listView));
  
  const wrapper = {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: 20,
  };
  const title = {
    color: 'white',
    display:'flex',
    gap: '8px',
    alignItems: 'center',
    justifiyContent: 'center',
  }

  return (
    <Container style={wrapper}>

      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add Blog
      </Button>
      <ToggleListToGrid listView={listView}  setListView={setListView}/>
            

      {/* <span style={iconContainer} onClick={toggleListView}>

        <GridIcon show={listView}/>
        <ListIcon show={listView}/>

      </span> */}
      <Grid container spacing={2} direction={isMobile ? "column" : "row"}>

        {listView ? blogs.map((blog, index) => (
          <Grid item xs={12} sm={4} key={index}>
            
            <img
              src={blog.src}
              alt={blog.title}
              style={{ width: "100%", bordserRadius: 8 }}
            />
            <Typography variant="subtitle1" align="center" style={title}>
              {blog.title}
            <span className="edit" onClick={() => handleOpen(blog)} style={{ backgroundColor: 'grey', padding: '4px 4px', display: 'inline', alignItems: 'centers', borderRadius: "4px"}}>
              <EditIcon fontSize="4px" sx={{ color: 'white' }} />
            </span>
            <Button variant="contained" color="error" onClick={() => handleDeleteBlog(blog)}>
              Delete
            </Button>
            </Typography>
          </Grid>
        )):   <List>
          {blogs.map((blog, index) => (
            <ListItem key={index} style={{ display: 'flex' , flexDirection: 'column', gap: 8, marginBottom: '20px', }}>
                <img

                  src={blog.src}
                  alt={blog.title}
                  style={{ width: "80%",borderRadius: 8 }}
                />
                <Typography variant="subtitle1" align="center"  style={title}>
                  {blog.title}
                </Typography>
                <span className="edit" onClick={() => handleOpen(blog)} style={{ backgroundColor: 'grey', padding: '4px 4px', display: 'inline', alignItems: 'centers', borderRadius: "4px"}}>
                  <EditIcon fontSize="4px" sx={{ color: 'white' }} />
                </span>
                <Button variant="contained" color="error" onClick={() => handleDeleteBlog(blog)}>
                  Delete
                </Button>
            </ListItem>
          ))}
        </List>}

      </Grid>
      <AddBlogModal  open={modalOpen} handleClose={handleClose} handleAddBlog={handleAddBlog} editBlog={handleEditBlog} currentBlog={currentBlog}/>

    </Container>
  );
};

export default BlogView;
