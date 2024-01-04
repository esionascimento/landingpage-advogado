"use client";
import { Box, Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { Title } from "@/components/Title/Title";
import { CardServicos } from "./styles";

export function NossosServicosSection() {
  return (
    <Box>
      <Box>
        <Title>Nossos Serviços</Title>
      </Box>
      <Box>
        <Container>
          <Grid2 container spacing={2} disableEqualOverflow>
            <Grid2 xs={6} sm={4} md={4}>
              <CardServicos>
                <Title variant="h6">DIREITO CIVIL</Title>
              </CardServicos>
            </Grid2>
            <Grid2 xs={6} sm={4} md={4}>
              <CardServicos>
                <Title variant="h6">DIREITO DO CONSUMIDOR</Title>
              </CardServicos>
            </Grid2>
            <Grid2 xs={6} sm={4} md={4}>
              <CardServicos>
                <Title variant="h6">DIREITO MÉDICO</Title>
              </CardServicos>
            </Grid2>
            <Grid2 xs={6} sm={4} md={4}>
              <CardServicos>
                <Title variant="h6">DIREITO AMBIENTAL</Title>
              </CardServicos>
            </Grid2>
            <Grid2 xs={6} sm={4} md={4}>
              <CardServicos>
                <Title variant="h6">DIREITO PENAL</Title>
              </CardServicos>
            </Grid2>
            <Grid2 xs={6} sm={4} md={4}>
              <CardServicos>
                <Title variant="h6">DIREITO TRABALHISTA</Title>
              </CardServicos>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
}
