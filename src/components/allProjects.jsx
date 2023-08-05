import React from "react";
import {
  Box,
  Stack,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Paper,
  IconButton
} from "@mui/material";
import Image from "next/image";
import image from "../../public/media/ml.webp";
import theme from "@/pages/dashboard/theme";
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from "@mui/material/styles";

const projects = [
  {
    imageUrl: image,
    title: "Project 1",
    description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    stars: 50,
  },
  {
    imageUrl: image,
    title: "Project 2",
    description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    stars: 30,
  },
  {
    imageUrl: image,
    title: "Project 2",
    description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    stars: 30,
  },
];

const paperBox = (theme) => ({
    display: "flex", 
    direction: "row", 
    alignItems: "center",  
    marginBottom: 2,
    p: 2,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    "&:hover": {
        backgroundColor: "rgba(255,255,255, 0.05)",
    },
})

const imageBox = {
    width: "200px", 
    height: "130px", 
}

const ProjectBox = ({ imageUrl, title, description, stars }) => {
  return (
    <Paper
      sx={paperBox}
      elevation={0}
    >
      <Box sx={{ mr: 2 }}>
        <Image
          src={imageUrl}
          alt={title}
          style={imageBox}
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2" color="textSecondary" sx={{display: "flex", alignItems: "center", marginTop: "5px"}}>
            <StarIcon sx={{ fontSize: "15px"}} /><span style={{ marginLeft: '3px' }}>{`${stars}`}</span>
        </Typography>
      </Box>
    </Paper>
  );
};

const AllProjects = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: "3.35em",
            marginTop: "5.5rem",
          }}
        >
          All Projects
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6}>
              <ProjectBox {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllProjects;
