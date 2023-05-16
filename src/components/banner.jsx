import React, { useRef, useEffect, useState } from "react";
import Vanta from "vanta/dist/vanta.net.min";
import WAVES from "vanta/dist/vanta.waves.min";
import GLOBE from "vanta/dist/vanta.globe.min";
import { Box, Typography, Button } from "@mui/material";

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
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "600px",
        }}
      >
        <div ref={myRef}>
          <Box
            sx={{
              flexDirection: "column",
              paddingLeft: "10%",
              paddingTop: "10rem",
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: "#eeeee4" }}>
              Hi, its me
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontFamily:
                  "'Calibre','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif",
                fontSize: "24px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15rem",
                color: "#eeeee4",
              }}
            >
              My Name
            </Typography>
            <Typography
              sx={{ color: "#eeeee4" }}
              variant="subtitle1"
              gutterBottom
            >
              Web Developer and Machine Learning Enthusiast
            </Typography>
            <Typography
              sx={{ color: "#eeeee4" }}
              variant="subtitle1"
              gutterBottom
            >
              Highly motivated and organized electrical engineer having focus in
              Machine Learning, Data Science and web development, capable of
              leading a diverse team. I am seeking opportunities to gain
              hands-on experience in solving real-world problems.
            </Typography>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Banner;
