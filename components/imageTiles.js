import Image from "next/image"
import dt from "../images/aboutImages/dt_8.JPG"
import kb from "../images/aboutImages/kb_3.webp"
import dog from "../images/aboutImages/dog.webp"

import { Container, ImageList, ImageListItem } from "@mui/material"

const list = [
    { img: dt.src, alt: "working at my desk" },
    { img: kb.src, alt: "my keyboard" },
    { img: dog.src, alt: "my dog" }
]

function populate(images) {
    const total = images.map(e => {
        return  <ImageListItem key={e.img} sx={{
                                overflow: "hidden"
                            }}>
                        <Image 
                            src={e.img} 
                            height={400} 
                            width={400} 
                            layout="cover"
                            alt={e.alt}
                            loading="lazy"
                            col={1} 
                            row={1}
                            style={{borderRadius: ".75rem", margin: "auto"}}
                            />
                </ImageListItem>
    })
    return total
}

const ImageTiles = () => {
    return (
        <Container sx={{ 
            marginBottom: "2.5rem",

        }}>
            <ImageList sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, minmax(0, 1fr)) !important",
                    md: "repeat(3, minmax(0, 1fr)) !important"
                }
            }}>
                {populate(list)}
            </ImageList>
        </Container>
    )
}

export default ImageTiles