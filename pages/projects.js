import Header from "@/components/header"
import keyboard from "../images/dt_2.webp"
import Work from "@/components/work"
import { Container } from "@mui/material"
import ProjectDetails from "@/components/projectDetails"
import profile from "../images/profile.jpg"
import Footer from "@/components/footer";


function populate(projects) {
  const items = projects.map((item) => {
    return <Work 
      project={item?.project ?? ""} 
      description={item?.description ?? "Coming soon!"}
      sourceCode={item?.sourceCode ?? "https://github.com/DanielCW7"} 
      demo={item?.demo ?? "https://github.com/DanielCW7"} 
      thumbnail={item?.thumbnail ?? profile.src} 
      badges={item?.badges ?? ""} 
      key={item?.project ?? ""} />
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
            img={keyboard}
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
          <Footer />

        </>
    )
}

export default Projects