import React from 'react'
import {Typography,CardContent,CardMedia,Avatar,Card,CardHeader,Box, IconButton} from "@mui/material";
import { red } from '@mui/material/colors';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const Blog = ({title,description,imageURL,userName,isUser,id}) => {
    const navigate = useNavigate();
    const handleEdit = (e)=>{
        navigate(`/myBlogs/${id}`);
    }
    console.log(title,isUser);
    const deleteRequest = async()=>{
      const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err=>console.log(err));
      const data = await res.data;
      return data;
    }
    const handleDelete = ()=>{
     deleteRequest().then(()=>navigate("/")).then(()=>navigate("/blogs"))
    }
  return (
    <div> <Card sx={{ width: "40%",margin:"auto",mt:2,padding:2,boxShadow:"5px 5px 10px #ccc",":hover:":{
        boxShadow:"10px 10px 20px #ccc"
    } }}>
        {isUser && (
            <Box display="flex">
              <IconButton color='warning' onClick={handleEdit} sx={{marginLeft:"auto"}}><ModeEditOutlineIcon/></IconButton>
              <IconButton color='error' onClick={handleDelete} ><DeleteOutlineIcon/></IconButton>
            </Box>
        )}
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          {userName}
        </Avatar>
      }
      
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={imageURL}
      alt="Paella dish"
    />
    
    <CardContent>
    <hr/>
    <br/>
      <Typography variant="body2" color="text.secondary">
       <b>{userName}</b>{": "} {description}
      </Typography>
    </CardContent>
    
  </Card>
  </div>
  )
}

export default Blog