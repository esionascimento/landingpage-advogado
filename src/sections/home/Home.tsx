'use client';
import { Box, useTheme } from '@mui/material';

import { AppBarSection } from '../appBar/AppBar';
import { ContainerInitialSection } from '../containerInitial/ContainerInitial';
import { NossosServicosSection } from '../nossosServicos/NossosServicos';
import { PerguntasFrequentesSection } from '../perguntaFrequentes/PerguntasFrequentes';
import { ContatoSection } from '../contato/Contato';
import { ModeToggle } from '@/components/mode-toggle';

export function HomeSection() {
  return (
    <>
      <Box>
        <AppBarSection />
      </Box>
      {/* <ModeToggle/> */}
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
