import { useState, useEffect, use } from "react";
import { Box, Container, Typography } from "@mui/material";

const BuildingBlock = () => {

let position = 0
const adjectives = ["versatile.", "ambitious.", "adaptable.", "reliable."];
const [word, changeWord] = useState(adjectives[position])

const typewriter = async (target, currentWord) => {
    return new Promise(resolve => {
        for (let i = 0; i < currentWord.length; i++) {
            setTimeout(() => {
                target.innerHTML += currentWord[i];
                if (i === currentWord.length - 1) {
                    resolve();
                }
            }, 100 * i);
        }
    });
}

const deleting = async (target, currentWord) => {
    return new Promise(resolve => {
        for (let i = currentWord.length; i >= 0; i--) {
            setTimeout(() => {
                target.innerHTML = target.innerHTML.slice(0, -1);
                if (i === 0) {
                    resolve();
                }
            }, 100 * (currentWord.length - i));
        }
    });
}

const typingLoop = async (target) => {
    for (const word of adjectives) {
        await typewriter(target, word);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await deleting(target, word);
    }
    typingLoop(target);
}

useEffect(() => {
    const target = document.querySelector(".typewriter");
    typingLoop(target);
}, []);


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
          <Typography className="font-black" variant="h1" component="h2" gutterBottom sx={{
            fontSize: {
                xs: "3rem",
                md: "4rem",
                lg: "5rem"
            }
          }}>
            I am <span className="typewriter transition-all"></span>
          </Typography>
        </Box>                    
      </Container>             
    </Box>
  );
};

export default BuildingBlock;
