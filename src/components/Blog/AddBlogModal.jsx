import React, { useEffect, useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";

// styles
const button = {
  backgroundColor: "black",
  color: "white",
  height: "45px",
  width: "30%",
  borderRadius: '8px'
};

const AddBlogModal = ({
  open,
  handleClose,
  handleAdd,
  handleEdit,
  current,
}) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (current) {
      setUrl(current.src || "");
      setTitle(current.title || "");
    } else {
      setUrl("");
      setTitle("");
    }
  }, [current]);

  const handleSubmit = () => {
    if (current) {
      handleEdit({ src: url, title });
    } else {
      handleAdd({ src: url, title });
    }

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          p: 4,
          borderRadius: "12px",
        }}
      >
        <Typography variant="h6" component="h2" fontWeight='bold'>
          {current ? "Edit Blog" : "Add New Blog"}
        </Typography>
        <TextField
          label="URL"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          style={button}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          {current ? "Save Changes" : "Add Blog"}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddBlogModal;
