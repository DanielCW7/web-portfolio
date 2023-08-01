import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

const adjectives = ["versatile", "ambitious", "adaptable", "reliable"];

const BuildingBlock = () => {
  const [currentAdjective, setCurrentAdjective] = useState(adjectives[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCurrentAdjective(adjectives[index]);
  }, [index]);

  return (
    <Box className="bg-cover bg-fixed">
      <Container className="gap-10 flex flex-col md:flex-row justify-center" sx={{
        minHeight: {
          xs: "40vh",
          sm: "40vh",
          md: "45vh",  
        },
        p: 5
      }}>
        <Box className="flex-1 flex flex-col justify-center text-center ">
          <Typography className="font-black" variant="h1" component="h2" gutterBottom>
            I am <span className="fade-in-out">{currentAdjective}</span>
          </Typography>
        </Box>                    
      </Container>             
    </Box>
  );
};

export default BuildingBlock;
