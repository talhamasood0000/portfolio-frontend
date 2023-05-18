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
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import image from "../media/ml.webp";

const Projects = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        My Projects
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {/* <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Grid container spacing={2} maxWidth={600}>
                    <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Project Name
                        </Typography>
                        <Typography variant="body1">
                            Project Description
                        </Typography>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                            Technologies Used
                        </Typography>
                        <Typography variant="body2">
                            Technology 1, Technology 2, Technology 3
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary" href="https://github.com">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://example.com">
                            Live Project
                        </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <img src="/path/to/your/image.jpg" alt="Project Image" style={{ width: '100%', height: '100%' }} />
                    </Grid>
                </Grid>
            </Box> */}
        <Box width="1100px" height="400px" sx={{ backgroundColor: "orange" }}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Box sx={{ width: "600px", height: "400px" }}>
              <Image
                src={image}
                alt="Logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{ backgroundColor: "green", width: "600px", height: "400px" }}
            >
              <Stack
                direction="column"
                justifyContent="space-around"
                alignItems="flex-end"
                spacing={3}
                sx={{
                  backgroundColor: "brown",
                  width: "600px",
                  height: "400px",
                }}
              >
                <Typography>This is project Name</Typography>
                <Box
                  sx={{
                    backgroundColor: "grey",
                    width: "600px",
                    height: "100px",
                  }}
                >
                  <Typography>This is the details section</Typography>
                </Box>
                <Typography>Things used in project</Typography>
                <Box sx={{ display: "flex", gap: "8px", paddingRight: "5px" }}>
                  <GitHubIcon />
                  <GitHubIcon />
                  <GitHubIcon />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Projects;
