import Image from "next/image"
import dt from "../images/aboutImages/dt_8.JPG"
import kb from "../images/aboutImages/kb_3.webp"

import { Container, ImageList, ImageListItem, Skeleton } from "@mui/material"

const list = [
    {
        img: dt.src,
        alt: "working at my desk",
    },
    {
        img: kb.src,
        alt: "keyboard"
    },
    {
        img: kb.src,
        alt: "keyboard"
    },
    {
        img: dt.src,
        alt: "working at my desk",
    },
    {
        img: dt.src,
        alt: "working at my desk",
    },
    {
        img: dt.src,
        alt: "working at my desk",
    },
]

function populate(images) {
    console.log(images)
    const total = images.map(e => {
        return  <ImageListItem key={e.img} cols={1}>
                        <Image 
                            src={e.img} 
                            height={400} 
                            width={400} 
                            layout="cover"
                            alt={e.alt}
                            loading="lazy"
                            col={1} 
                            row={1} 
                            className="rounded-xl overflow-hidden"/>
                </ImageListItem>
    })
    return total
}

const ImageTiles = () => {
    return (
        <Container className="mb-10">
            <ImageList cols={3} sx={{ }}>
                {/* <ImageListItem><Image src={dt} width={100} height={100} /></ImageListItem> */}
                {populate(list)}
            </ImageList>
        </Container>
    )
}

export default ImageTiles