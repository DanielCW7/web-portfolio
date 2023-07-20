import Header from "@/components/header"
import laptop2 from "../images/laptop2.jpg"
import CardContainer from "@/components/cardContainer"


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
          <CardContainer />
        </>
    )
}

export default Projects