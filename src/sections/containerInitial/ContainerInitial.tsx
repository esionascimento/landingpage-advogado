'use client';
import { Box, Button, Card, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

export function ContainerInitialSection() {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container
      maxWidth={false}
      sx={{ position: 'relative', overflow: 'hidden', padding: '0px !important' }}
    >
      <Box position='absolute' top='0' left='0' width='100%' height='100%' zIndex='-1'>
        <Image
          src='/vecteezy_advogado-masculino-ou-juiz-trabalhando-com-documentos-de_7359629.JPG'
          alt='Next.js Logo'
          width={1920}
          height={180}
          layout='responsive'
          className='imagem-full-width'
          priority
        />
      </Box>
      <Box
        id='box-texts'
        display={'flex'}
        justifyContent={'center'}
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        color='white'
        position='relative'
        zIndex='1'
      >
        <Box marginTop={!upSm ? 5 : !upMd ? 10 : 25}>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 900,
              fontSize: 75,
              color: 'black',
            }}
          >
            ADVOCACIA
          </Typography>
        </Box>
        <Box mt={2} marginBottom={!upSm ? 5 : !upMd ? 10 : 25}>
          <Button>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 900,
                color: 'black',
                border: '1px solid white',
                padding: 2,
                borderRadius: 2,
                backgroundColor: 'white',
              }}
            >
              Fale com um especialista
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
