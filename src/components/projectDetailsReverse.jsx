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

const ProjectDetailsReverse = (props) => {
  return (
    <Box width="100%" height="400px" sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "55%",
          height: "inherit",
          position: "relative",
          zIndex: "1",
        }}
      >
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
                  <Box
                    height="50%"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                      paddingRight: "4%",
                    }}
                  >
                    <Typography style={{ fontSize: "20px" }}>
                      Featured Project
                    </Typography>
                  </Box>
                  <Box
                    height="50%"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      paddingRight: "4%",
                    }}
                  >
                    <Typography style={{ fontSize: "30px" }}>
                      Machine Learning in 5 Months
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              height="33.3%"
              sx={{
                backgroundColor: "#93A7B4",
                borderRadius: "10px",
              }}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              textAlign="left"
            >
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
                  <Box
                    height="50%"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingRight: "4%",
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Chip
                        label="Tag Text"
                        style={{
                          color: "#5EEAD4",
                          borderRadius: "16px",
                        }}
                      />
                      <Chip
                        label="Tag Text"
                        style={{
                          color: "#5EEAD4",
                          borderRadius: "16px",
                        }}
                      />
                      <Chip
                        label="Tag Text"
                        style={{
                          color: "#5EEAD4",
                          borderRadius: "16px",
                        }}
                      />
                    </Stack>
                  </Box>
                  <Box
                    height="50%"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      paddingRight: "4%",
                    }}
                  >
                    <Button variant="contained" style={{ fontSize: "10px" }}>
                      Button to Project here
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ top: 0, right: 0 , width: "55%", height: "inherit", position: "absolute" }}>
        <Image
          src={image}
          alt="Logo"
          style={{ width: "100%", height: "inherit" }}
        />
      </Box>
    </Box>
  );
};

export default ProjectDetailsReverse;
