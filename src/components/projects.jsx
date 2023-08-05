import React from "react";
import {
  Box,
  Stack,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import theme from "@/pages/dashboard/theme";
import ProjectDetails from "./projectDetails";
import ProjectDetailsReverse from "./projectDetailsReverse";

const Projects = () => {
  return (
    <Box
      sx={{ backgroundColor: theme.palette.background.paper }}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", marginBottom: "4.35rem", marginTop: "5.5rem" }}
        >
          My Projects
        </Typography>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          <ProjectDetails />
          <ProjectDetailsReverse />
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;
