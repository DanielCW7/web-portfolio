import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import res from "../images/ResumeWeb.webp"
import resumeFile from "../Resume.pdf"
import DownloadIcon from '@mui/icons-material/Download';
import laptop from "../images/laptop2.webp"
import Header from "@/components/header";

const resume = () => {
  
    const downloadPdf = () => {
        window.open(resumeFile, '_blank');
      };


    return (
        <>
            <Header 
                title="Resume" 
                subtitle=""
                link="/projects"
                cta=""
                img={laptop}
            />


            <Container sx={{ 
                p: 5,
                textAlign: "center"
            }}>           
                <Button sx={{ marginBottom: 5 }} variant="outlined" onClick={downloadPdf}> Download Resume <DownloadIcon/></Button>
                <Image layout="instrinsic" src={res}/>            

            </Container>        
        </>

    )
}

export default resume