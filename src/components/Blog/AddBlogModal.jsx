import React, { useEffect, useState } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';

const AddBlogModal = ({ open, handleClose, handleAddBlog, editBlog, currentBlog }) => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

    useEffect(() => {
      if (currentBlog) {
        setUrl(currentBlog.src || '');
        setTitle(currentBlog.title || '');
      } else {
        setUrl('');
        setTitle('');
      }
    }, [currentBlog]);
    
    const handleSubmit = () => {
      if(currentBlog){
        editBlog({ src: url, title });
      }else{
        handleAddBlog({ src: url, title });

    }

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        boxShadow: 24, 
        p: 4 
      }}>
        <Typography variant="h6" component="h2">
            {currentBlog ? 'Edit Blog' : 'Add New Blog'}
        </Typography>
        <TextField
          label="URL"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
            {currentBlog ? 'Save Changes' : 'Add Blog'}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddBlogModal;
