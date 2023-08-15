import { useState, useEffect, use } from "react";
import { Box, Container, Typography } from "@mui/material";

const typingSection = () => {

const adjectives = ["versatile.", "ambitious.", "adaptable.", "reliable."];

// types the word out 
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

// deletes current word
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

// goes from typing to deleting, and loops
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
    <Box className="bg-cover bg-fixed my-10 md:my-20">
      <Container sx={{
        minHeight: {
          xs: "40vh",
          sm: "40vh",
          md: "45vh",  
        },
        p: 5
      }} className="gap-10 flex flex-col md:flex-row justify-center">
        <div className="flex-1 flex flex-col justify-center text-center">
          <span className="font-black text-5xl md:text-6xl lg:text-7xl" variant="h1" component="h2" gutterBottom >
            I am <span className="typewriter transition-all"></span>
          </span>
        </div>                    
      </Container>             
    </Box>
  );
};

export default typingSection;
