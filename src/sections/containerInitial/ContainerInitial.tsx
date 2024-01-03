"use client";
import { Box, Button, Container, Typography } from "@mui/material";

export function ContainerInitialSection() {
  return (
    <Container
      maxWidth={false}
      sx={{ padding: "50px 0px !important", background: "silver" }}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Typography variant="h3">ADVOCACIA</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Button>Fale com um especialista</Button>
      </Box>
    </Container>
  );
}

{
  /* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */
}
