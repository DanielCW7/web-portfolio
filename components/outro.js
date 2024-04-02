import { Box, Container, Typography, Button } from "@mui/material"
import { useEffect } from "react";
import EmailIcon from '@mui/icons-material/Email';

const Outro = () => {
    const adjectives = ["something awesome.", "unique experiences.", "lasting impressions.", "something new."];

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
                }, 50 * (currentWord.length - i));
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

            <Container sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5,
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                // border: "solid red 1px"

            }}>
 
                <Box sx={{
                    height: "100%",
                    textAlign: {
                        xs: "left",
                        md: "center"
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    margin: "auto",
                    // border: "solid blue 2px",
                    width: {
                        xs: "auto",
                        md: "100%"
                    }
                }}> 
                    <Typography sx={{
                        fontWeight: 900,
                        fontSize: {
                            xs: "2rem",
                            md: "4rem",
                            xl: "5rem"
                        }
                        }} variant="h1" component="h2" gutterBottom >
                            <span className="pretype"> Together, </span> 
                            <br/>
                            <span className="midtype"> we can create </span> 
                            <br/>
                        <span className="typewriter" variant="h1" component="h2"></span>
                    </Typography>
                    <Box> 
                        <Typography variant="body1" gutterBottom> 
                            If you're looking to expand your web team, then let's talk. 
                        </Typography> 
                        {/* <Typography variant="body1" className="" gutterBottom> 
                            I'm always learning and working on my next project, but experience is the best teacher by far.
                            If you like my projects, please don't hesitate to reach out!
                        </Typography>  */}
                        <Button sx={{
                            marginTop: "1.25rem"
                        }} href="mailto:dev.danielcw@gmail.com" variant="outlined" startIcon={<EmailIcon />}> Contact </Button>
                                                
                    </Box> 
                </Box>                                  
 
            </Container>            
    )
}

export default Outro

