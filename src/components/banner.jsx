import React, { useRef, useEffect, useState } from "react";
import Vanta from "vanta/dist/vanta.net.min";
import WAVES from "vanta/dist/vanta.waves.min";
import GLOBE from "vanta/dist/vanta.globe.min";
import { Box, Typography, Button, Container } from "@mui/material";
import theme from "@/pages/dashboard/theme";

const Banner = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 5.0,
          size: 1.0,
          maxDistance: 20.0,
          spacing: 15.0,
          points: 20.0,
          color: theme.palette.text.hint,
          color2: theme.palette.background.paper,
          backgroundColor: theme.palette.background.paper,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Box sx={{ height: "600px" }}>
        <div ref={myRef}>
          <Container>
            <Box sx={{ paddingTop: "8%" }}>
              <Typography variant="h6" gutterBottom>
                Hi, its me
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.15rem",
                }}
              >
                My Name
              </Typography>
              <Typography variant="h4" gutterBottom>
                Web Developer and Machine Learning Enthusiast
              </Typography>
              <Typography variant="body1" gutterBottom maxWidth="65ch">
                Highly motivated and organized electrical engineer having focus
                in Machine Learning, Data Science and web development, capable
                of leading a diverse team. I am seeking opportunities to gain
                hands-on experience in solving real-world problems.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                style={{ width: "160px", height: "50px" }}
                sx={{
                  marginTop: "0.35rem",
                  borderRadius: "4px",
                  borderColor: theme.palette.text.hint,
                  "&:hover": {
                    color: "white",
                    borderColor: "white",
                  },
                }}
              >
                <Typography variant="button">Learn More</Typography>
                
              </Button>
            </Box>
          </Container>
        </div>
      </Box>
    </>
  );
};

export default Banner;
