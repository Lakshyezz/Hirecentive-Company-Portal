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
import DeleteIcon from "../../assets/DeleteIcon";

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
  const [current, setCurrent] = useState(null);
  
  
  const handleAdd = (blog) => {
    setBlogs([...blogs, blog]);
  };
  
  const handleEdit = (updatedBlog) => {
    // console.log("updatedBlog  " + updatedBlog);
    setBlogs(blogs.map(blog => blog === current ? updatedBlog : blog));
    setCurrent(null);
  };
  
  const handleDeleteBlog = (blogToDelete) => {
    setBlogs(blogs.filter(blog => blog !== blogToDelete));
  };
  
  const handleOpen = (blog = null) =>{
    // console.log("blog  " + blog.src);
    setCurrent(blog);
     setModalOpen(true);
    }
  const handleClose = () =>{
     setModalOpen(false);
     setCurrent(null);
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
    const button = {
      backgroundColor: "white",
      color: "black",
      height: "40px",
      borderRadius: '8px',
    };


  return (
    <Container style={wrapper}>

      <Container style={{ width: 'contained', display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '20px'}}>
          <Button style={button}  variant="contained" onClick={() => handleOpen()}>
            Add Blog
          </Button>
          <ToggleListToGrid listView={listView}  setListView={setListView}/>
    
      </Container>        

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
              <DeleteIcon/>
            </Button>
            </Typography>
          </Grid>
        )):   <List>
          {blogs.map((blog, index) => (
            <ListItem key={index} style={{ display: 'flex' , flexDirection: 'column', gap: 8, marginBottom: '20px', border: '1px solid black', padding: '8px 0px', borderRadius:'8px'}}>
                <img
                  src={blog.src}
                  alt={blog.title}
                  style={{ width: "80%",borderRadius: 8 }}
                />
                <Container style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between'}}>

                    <Typography variant="subtitle1" align="center"  style={title}>
                      {blog.title}
                    </Typography>

                    <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '8px', padding: '0px'}}>
                      <span className="edit" onClick={() => handleOpen(blog)} style={{ backgroundColor: 'grey', padding: '4px 4px', display: 'inline', alignItems: 'centers', borderRadius: "4px"}}>
                        <EditIcon fontSize="4px" sx={{ color: 'white' }} />
                      </span>
                      <span style={{ backgroundColor: '#B50B00', padding: '4px 4px', display: 'inline', justifyContent: 'center',alignItems: 'centers', borderRadius: "4px"}} variant="contained" color="error" onClick={() => handleDeleteBlog(blog)}>
                        <DeleteIcon/>
                      </span>
                    </Container>

                </Container>
            </ListItem>
          ))}
        </List>}

      </Grid>
      <AddBlogModal  open={modalOpen} handleClose={handleClose} handleAdd={handleAdd} handleEdit={handleEdit} current={current}/>

    </Container>
  );
};

export default BlogView;
