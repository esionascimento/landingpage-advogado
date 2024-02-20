'use client';
import { Box, Container, useTheme } from '@mui/material';
import Image from 'next/image';

export function ContainerInitialSection() {
  return (
    <Container
      maxWidth={false}
      sx={{ position: 'relative', overflow: 'hidden', padding: '0px !important' }}
    >
      <Box marginTop={3} width='100%' height='100%' display={'flex'} justifyContent={'center'}>
        <Image
          src='/adv-osvaldo.jpeg'
          alt='Image osvaldo adv'
          width={500}
          height={100}
          layout='fixed'
        />
      </Box>
    </Container>
  );
}
