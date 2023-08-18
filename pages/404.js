import { Box, Typography } from "@mui/material"


const custom404 = () => {
    return (
        <Box sx={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <Typography sx={{
                textAlign: "center",
                fontWeight: 900,
                color: "rgba(156, 163, 175)",
                fontSize: "3.75rem"
            }}> 404 </Typography>
            <Typography sx={{
                textAlign: "center",
                fontWeight: 900,
                color: "rgba(156, 163, 175)",
                fontSize: "1.5rem"
            }}> Page not found </Typography>
        </Box>
    )
}

export default custom404