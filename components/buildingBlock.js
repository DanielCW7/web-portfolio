import { useState, useEffect, use } from "react";
import { Box, Container, Typography } from "@mui/material";
const adjectives = ["versatile", "ambitious", "adaptable", "reliable"];

const BuildingBlock = () => {
  // const [currentAdjective, setCurrentAdjective] = useState(adjectives[0]);
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
  //   }, 6000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // useEffect(() => {
  //   setCurrentAdjective(adjectives[index]);
  // }, [index]);

  
const [word, changeWord] = useState(adjectives[0])

useEffect(() => {
  function adj() {
    const target = document.querySelector(".typewriter");

    // types out the entire word and then exits the function - need to create a delete counterpart and then change the word, restarting the function
    for(let i = 0; i < word.length; i++) {
      setTimeout(() => {
        target.innerHTML += word[i]
      }, 250 * i)
    }
  } 
  
  adj()
})


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
        <Box className="flex-1 flex flex-col justify-center text-center">
          <Typography className="font-black" variant="h1" component="h2" gutterBottom>
            I am <span className="typewriter"></span>
          </Typography>
        </Box>                    
      </Container>             
    </Box>
  );
};

export default BuildingBlock;
