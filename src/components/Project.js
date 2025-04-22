import React from "react";
import { Box, Container, Typography, Chip, useMediaQuery, useTheme, Link } from "@mui/material";
import { SiEthereum } from "react-icons/si";
import { RiNftFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Project = () => {
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
                    My Development Work
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
                        <Box sx={{ display: "flex", flexDirection:"column", mb: 3 }}>
                            <Box sx={{display:"flex", mb:2, alignItems:"center"}}>
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: "50%",
                                        background: "rgba(98, 126, 234, 0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mr: 3,
                                    }}
                                >
                                    <SiEthereum size={32} color="#627EEA" />
                                </Box>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: '16px', lg: '30px' } }}>
                                    Innswap - Blockchain DEX
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem" }}>
                                Provide UI and Functionality Support for Innswap (Pancake swap Clone) from the
                                scratch and then continued to work on other features and Maintained the product in React js
                                as a part of blockchain project
                            </Typography>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: 'repeat(3, minmax(0, 1fr))',
                                    sm: 'repeat(auto-fill, minmax(150px, 1fr))'
                                },
                                gap: 1.5,
                                mb: 4,
                                width: '100%'
                            }}>
                                {["Liquidity", "Swapping", "Farming", "User Panel", "Admin Panel", "Bug Fixes"].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <Chip
                                            label={item}
                                            sx={{
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                color: 'white',
                                                fontWeight: 500,
                                                px: 1,
                                                py: 0.8,
                                                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                                                width: '100%',
                                                maxWidth: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                border: '1px solid transparent',
                                                '&:hover': {
                                                    background: 'rgba(255, 255, 255, 0.2)',
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                                    transform: 'translateY(-2px)'
                                                },
                                                '& .MuiChip-label': {
                                                    padding: { xs: '0 4px', sm: '0 8px' },
                                                    whiteSpace: 'normal',
                                                    textAlign: 'center',
                                                    lineHeight: '1.2'
                                                }
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </Box>
                            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem", color: "#FF416C" }}>
                                Refer. url : <Link href="https://innswap_react.zodeak-dev.com/">https://innswap_react.zodeak-dev.com/</Link>
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem" }}>
                                Implemented using Web3.js for blockchain interactions and React for the frontend.
                            </Typography>
                            <Box sx={{display:"flex", alignItems:"center", gap:1.5, mb:3}}>
                                {["React", "Web3.js", "GraphQl", "Typescript", "Redux", "StyledComponents"].map((tech, i) => (
                                    <Chip
                                        key={i}
                                        label={tech}
                                        sx={{
                                            background: "rgba(255, 255, 255, 0.2)",
                                            color: "white",
                                            fontWeight: 500,
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection:"column", mb: 3 }}>
                            <Box sx={{display:"flex", mb:2,  alignItems:"center"}}>
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: "50%",
                                        background: "rgba(98, 126, 234, 0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mr: 3,
                                    }}
                                >
                                    <RiNftFill size={32} color="#627EEA" />
                                </Box>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: '16px', lg: '30px' } }}>
                                    ZodeakNFT - Blockchain NFT
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem" }}>
                            Provide UI Support for ZodeakNFT (Rarible Clone) and Maintained the product in React js as
a part of blockchain project
                            </Typography>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: 'repeat(3, minmax(0, 1fr))',
                                    sm: 'repeat(auto-fill, minmax(150px, 1fr))'
                                },
                                gap: 1.5,
                                mb: 4,
                                width: '100%'
                            }}>
                                {["Mint", "Burn", "Transfer", "Timed Auction", "Admin Panel", "Bug Fixes"].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <Chip
                                            label={item}
                                            sx={{
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                color: 'white',
                                                fontWeight: 500,
                                                px: 1,
                                                py: 0.8,
                                                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                                                width: '100%',
                                                maxWidth: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                border: '1px solid transparent',
                                                '&:hover': {
                                                    background: 'rgba(255, 255, 255, 0.2)',
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                                    transform: 'translateY(-2px)'
                                                },
                                                '& .MuiChip-label': {
                                                    padding: { xs: '0 4px', sm: '0 8px' },
                                                    whiteSpace: 'normal',
                                                    textAlign: 'center',
                                                    lineHeight: '1.2'
                                                }
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </Box>
                            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem", color: "#FF416C" }}>
                                Refer. url : <Link href="https://zodeaknft.zodeak-dev.com/">https://zodeaknft.zodeak-dev.com/</Link>
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem" }}>
                                Implemented using Web3.js for blockchain interactions and React for the frontend.
                            </Typography>
                            <Box sx={{display:"flex", alignItems:"center", gap:1.5}}>
                                {["React", "Web3.js", "GraphQl", "Typescript", "Context API", "MUI", "StyledComponents"].map((tech, i) => (
                                    <Chip
                                        key={i}
                                        label={tech}
                                        sx={{
                                            background: "rgba(255, 255, 255, 0.2)",
                                            color: "white",
                                            fontWeight: 500,
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>



                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                            
                            <Box mt={3}>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, }}>
                                    +30 Landing Pages
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                                    Developed and optimized 30+ high-performance landing pages with React, handling all aspects from development to bug fixing.
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                                    {["React", "JavaScript", "CSS3", "Responsive Design", "Performance Optimization"].map((tech, i) => (
                                        <Chip
                                            key={i}
                                            label={tech}
                                            sx={{
                                                background: "rgba(255, 255, 255, 0.1)",
                                                color: "white",
                                                fontWeight: 500,
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            <Box mt={3}>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, }}>
                                    +20 HTML Static Pages
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                                20+ HTML websites, including static, wordpress, and e-commerce sites, were created and 5 cs-cart web templates developed from scratch and maintained other client projects
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                                    {["React", "JavaScript", "CSS3", "jQuery", "Bootstrap", "Responsive Design", "Performance Optimization", "CS-Cart"].map((tech, i) => (
                                        <Chip
                                            key={i}
                                            label={tech}
                                            sx={{
                                                background: "rgba(255, 255, 255, 0.1)",
                                                color: "white",
                                                fontWeight: 500,
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>

            </Container>
        </Box>
    );
};

export default Project;