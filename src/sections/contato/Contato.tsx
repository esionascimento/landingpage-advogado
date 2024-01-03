"use client";
import { Title } from "@/components/Title/Title";
import { Box, Container, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { CardServicos } from "./styles";
import { Apps } from "../maps/Maps";

export function ContatoSection() {
  return (
    <Box>
      <Box>
        <Container sx={{ padding: "10px 0px !important" }}>
          <Grid2 container spacing={0} disableEqualOverflow>
            <Grid2 xs={12} sm={6} md={6}>
              <CardServicos sx={{ padding: 3 }}>
                <Title>Contato</Title>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={0}
                >
                  <Box>
                    <Title variant="h6" lineHeight={0}>
                      Localização
                    </Title>
                    <Title variant="body1">
                      Av. José Vieira Caúla, 4252 - Agenor M. de Carvalho, Porto
                      Velho - RO, 76820-314
                    </Title>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Title variant="h6" lineHeight={0}>
                      Telefone
                    </Title>
                    <Title variant="body1">(69)9 9999-9999</Title>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Title variant="h6" lineHeight={0}>
                      Email
                    </Title>
                    <Title variant="body1">email@gmail.com</Title>
                  </Box>
                </Stack>
              </CardServicos>
            </Grid2>
            <Grid2 xs={12} sm={6} md={6}>
              <CardServicos>
                {/* <Title>DIREITO DO CONSUMIDOR</Title> */}
                <Apps />
              </CardServicos>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
}
