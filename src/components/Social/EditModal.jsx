import React, { useState } from 'react';
import { Modal, Box, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EditIcon from '../../assets/EditIcon';

const EditModal = ({ socialLinks, setSocialLinks }) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUrlChange = (event) => setUrl(event.target.value);
  const handlePlatformChange = (event) => setPlatform(event.target.value);

  const handleSubmit = () => {
    const updatedLinks = { ...socialLinks, [platform]: url };
    setSocialLinks(updatedLinks);
    handleClose();
  };
  
  // styles
  const button = {
    color: "black",
    borderRadius: "8px",
    padding: "8px 0px",
    // align: 'end',
    backgroundColor: "white",
    margin: "12px 0px",
  };
  const saveButton = {
    backgroundColor: "black",
    color: "white",
    height: "45px",
    width: "30%",
    borderRadius: '8px',
    fontWeight: '700'
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} style={button}>
            <EditIcon/>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            
            borderRadius: '8px',
          }}
        >
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="platform-label">Platform</InputLabel>
            <Select
              labelId="platform-label"
              id="platform"
              value={platform}
              label="Platform"
              onChange={handlePlatformChange}
              sx={{ borderRadius: '8px' }}
            >
              <MenuItem value="Instagram"><InstagramIcon /> Instagram</MenuItem>
              <MenuItem value="LinkedIn"><LinkedInIcon /> LinkedIn</MenuItem>
              <MenuItem value="Twitter"><TwitterIcon /> Twitter</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="URL"
            variant="outlined"
            value={url}
            onChange={handleUrlChange}
            sx={{ mb: 3, borderRadius: '8px' }}
          />
          <Button variant="contained" onClick={handleSubmit} style={saveButton}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
