import React from "react";
import { Box, Container, Typography, Chip, useMediaQuery, useTheme } from "@mui/material";
import { SiEthereum } from "react-icons/si";
import { motion } from "framer-motion";

const Expereience = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                py: 8,
                px: isMobile ? 2 : 6,
                color: "white",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                    content: '""',
                    position: "absolute",
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "rgba(98, 126, 234, 0.1)",
                    filter: "blur(40px)",
                }
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        mb: 6,
                        fontWeight: 700,
                        background: "linear-gradient(90deg, #fff, #aaa)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        fontSize: isMobile ? "2rem" : "2.5rem",
                    }}
                >
                    My Experience
                </Typography>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Box
                        sx={{
                            background: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(10px)",
                            borderRadius: 4,
                            p: 4,
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                            mb: 4,
                        }}
                    >
                            <Box sx={{mb:3}}> 
                                <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent:"space-between" }}>
                                        <Typography sx={{ fontWeight: 600, fontSize: { xs: '16px', lg: '25px' }, color:"#FF416C" }}>
                                            Innblockchian PVT LTD - React Developer
                                        </Typography>
                                        <Typography sx={{ fontWeight: 600, fontSize: { xs: '14px', lg: '20px' } }}>
                                            Apr 2023 - Present
                                        </Typography>
                                </Box>
                                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem" }}>
                                    I Worked on React Blockchain Projects like NFT Marketplace(Rarible Clone) and Defi (pancake swap clone) for maintaining and other feature works
                                    Also Serviced for React Service projects like ecommerce websites and products like (olx clone, airbnb clone).
                                    And also designed for a company landing page
                                </Typography>
                            </Box>
                            <Box> 
                                <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent:"space-between" }}>
                                        <Typography sx={{ fontWeight: 600, fontSize: { xs: '16px', lg: '25px' }, color:"#FF416C" }}>
                                            Bugtreat Technologies - UI Developer
                                        </Typography>
                                        <Typography sx={{ fontWeight: 600, fontSize: { xs: '14px', lg: '20px' } }}>
                                            May 2021 - Apr 2023
                                        </Typography>
                                </Box>
                                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem" }}>
                                I will be responsible for website developement and will taking care of maintenance of the Hosted website
                                and responsible for cs-cart(E-commerce) website making and maintenance
                                </Typography>
                            </Box>  
                    </Box> 
                        
                </motion.div>

            </Container>
        </Box>
    );
};

export default Expereience;