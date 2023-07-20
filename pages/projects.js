import Header from "@/components/header"
import laptop2 from "../images/laptop2.jpg"
import Work from "@/components/work"
import { Container } from "@mui/material"
import ProjectDetails from "@/components/projectDetails"
import { PropaneSharp } from "@mui/icons-material"

console.log(ProjectDetails)

function populate(projects) {
  const items = projects.map((item) => {
    return <Work 
      project={item.project} 
      description={item.description}
      sourceCode={item.sourceCode} 
      demo={item.demo} 
      thumbnail={item.thumbnail} 
      badges={item.badges} />
  })
  return items
}

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
          <Container sx={{ 
              p: 5,
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, minmax(100px, 1fr))",
                md: "repeat(2, minmax(100px, 1fr))",
                lg: "repeat(3, minmax(100px, 1fr))"
              },
              gridGap: "32px",
              justifyItems: "center"
            }}>
            {/* <Work project="Weather App" description="Check out some of my favorite projects! Each one played a part in making me a better developer. adasdasdasdasdasdsa"/> */}
            { ProjectDetails ? populate(ProjectDetails) : "Still working on this page!"}
          </Container>

        </>
    )
}

export default Projects