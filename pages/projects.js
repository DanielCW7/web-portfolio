import Header from "@/components/header"
import laptop2 from "../images/laptop2.jpg"
import Work from "@/components/work"
import { Container } from "@mui/material"

const Projects = () => {
    return (
        <>
          <Header 
            title="My Projects" 
            subtitle="Check out some of my favorite projects! Each one played a part in making me a better developer."   
            link=""
            cta=""
            img={laptop2}
          />
          <Container sx={{ p:5 }} className="flex flex-col md:flex-row flex-wrap gap-10">
            <Work project="Weather App" description="Check out some of my favorite projects! Each one played a part in making me a better developer. adasdasdasdasdasdsa"/>
            <Work project="Tic Tac Toe" description="a part in making me a better developer. adasdasdasdasdasdsa"/>
            <Work project="Weather App" description="Check out some of my favorite projects! Each one played a part in making me a better developer. adasdasdasdasdasdsa"/>
            <Work project="Weather App" description="Check out some of my favorite projects! Each one played a part in making me a better developer. adasdasdasdasdasdsa"/>
            <Work project="React Sorting App" description="Check out some of my favorite projects! Each one played a  a better developer. adasdasdasdasdasdsa"/>
          </Container>

        </>
    )
}

export default Projects