"use client";
import { Box } from "@mui/material";

import { AppBarSection } from "../appBar/AppBar";
import { ContainerInitialSection } from "../containerInitial/ContainerInitial";
import { NossosServicosSection } from "../nossosServicos/NossosServicos";
import { PerguntasFrequentesSection } from "../perguntaFrequentes/PerguntasFrequentes";
import { ContatoSection } from "../contato/Contato";

export function HomeSection() {
  return (
    <>
      <Box>
        <AppBarSection />
      </Box>
      <Box>
        <ContainerInitialSection />
      </Box>
      <Box>
        <NossosServicosSection />
      </Box>
      <Box>
        <PerguntasFrequentesSection />
      </Box>
      <Box>
        <ContatoSection />
      </Box>
      <Box></Box>
    </>
  );
}
