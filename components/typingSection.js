import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

const typingSection = () => {

const adjectives = ["anything.", "everything.", "today.", "tomorrow."];

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
    <Box sx={{
      backgroundPosition: "fixed",
      backgroundSize: "cover",
      marginTop: "2.5rem",
      marginBottom: "2.5rem",
    }}>
      <Container sx={{
        minHeight: {
          xs: "40vh",
          sm: "40vh",
          md: "45vh",  
        },
        p: 5,
        columnGap: 10,
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row"        
        },
        justifyContent: "center"
      }}>
        <Box sx={{
          display: "flex",
          flex: "flex: 1 1 0%;",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          
        }}>
          <Typography sx={{
              fontWeight: 900,
              fontSize: {
                xs: "2.5rem",
                lg: "3.75rem",
                xl: "4.5rem"
              }
            }} variant="h1" component="h2" gutterBottom >
            Together, we can take on <br/><span className="typewriter" variant="h1" component="h2"></span>
          </Typography>
        </Box>                    
      </Container>             
    </Box>
  );
};

export default typingSection;
