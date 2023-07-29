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
} from "@mui/material";
import Image from "next/image";
import image from "../../public/media/ml.webp";
import theme from "@/pages/dashboard/theme";

const firstBox = (theme) => ({
  width: "55%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: "75%",
    margin: "auto",
    opacity: "0.25",
  },
});

const secondBox = (theme) => ({
  top: 0,
  right: 0,
  height: "50%",
  width: "55%",
  height: "inherit",
  position: "absolute",
  [theme.breakpoints.down("md")]: {
    left: "50%",
    transform: "translateX(-50%)",
    width: "65%",
    height: "inherit",
    position: "absolute",
  },
});

const projectHeading = (theme) => ({
  height: "50%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  paddingRight: "4%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
});

const projectName = (theme) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  paddingRight: "4%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
});

const projectDescription = (theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "right",
  backgroundColor: "#93A7B4",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
});

const projectTags = (theme) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  paddingRight: "4%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
});

const projectButton = (theme) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  paddingRight: "4%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
});

const projectChip = (theme) => ({
  color: "#5EEAD4",
  borderRadius: "16px",
});

const ProjectDetails = () => {
  return (
    <Box width="100%" height="400px" sx={{ position: "relative" }}>
      <Box sx={firstBox}>
        <Image
          src={image}
          alt="Logo"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box sx={secondBox}>
        <Grid container style={{ height: "100%" }}>
          <Grid item xs={12} style={{ gridAutoFlow: "row" }}>
            <Box height="33.3%">
              <Grid container style={{ height: "100%" }}>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={projectHeading}>
                    <Typography style={{ fontSize: "20px" }}>
                      Featured Project
                    </Typography>
                  </Box>
                  <Box sx={projectName}>
                    <Typography style={{ fontSize: "30px" }}>
                      Machine Learning in 5 Months
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box height="33.3%" sx={projectDescription}>
              <Typography
                sx={{ color: theme.palette.background.primary }}
                style={{
                  margin: "4%",
                  fontSize: "18px",
                }}
              >
                This project demonstrate the process of getting started with
                Facebook FAIRs 2 project on windows 10 without any Nvidia GPU..
              </Typography>
            </Box>
            <Box height="33.3%">
              <Grid container style={{ height: "100%" }}>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box height="50%" sx={projectTags}>
                    <Stack direction="row" spacing={2}>
                      <Chip label="Tag Text" sx={projectChip} />
                      <Chip label="Tag Text" sx={projectChip} />
                      <Chip label="Tag Text" sx={projectChip} />
                    </Stack>
                  </Box>
                  <Box height="50%" sx={projectButton}>
                    <Button style={{ fontSize: "10px" }}>
                      Button to Project here
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
