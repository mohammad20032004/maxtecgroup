import React from 'react';
import { Box, Container, Typography, Button, Stack, Paper, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import heroBg from '../../assets/hero-bg.png';
import heroVd from '../../assets/hero-vd.mp4';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
`;

const HeroWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
}));

const BackgroundImage = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  backgroundImage: `url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.3,
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.8), transparent)',
  },
});

const Badge = styled(Paper)(({ theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(0.5, 2),
  borderRadius: 999,
  border: `1px solid ${theme.palette.primary.main}50`,
  backgroundColor: 'rgba(255,102,0,0.1)',
  backdropFilter: 'blur(4px)',
  marginBottom: theme.spacing(2),
  animation: `${pulse} 3s infinite`,
}));

const GradientText = styled(Typography)({
  background: 'linear-gradient(to right, #FF6600, #ff9e59)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 10px rgba(255,102,0,0.7), 0 0 20px rgba(255,102,0,0.5)',
});

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  left: '50%',
  transform: 'translateX(-50%)',
  animation: `${bounce} 2s infinite`,
  color: theme.palette.primary.main,
  fontSize: '2rem',
  cursor: 'pointer',
  zIndex: 10,
}));

const HeroSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroWrapper id="home" component="header">
      {isMdUp ? (
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
            zIndex: 0,
          }}
        >
          <source src={heroVd} type="video/mp4" />
        </Box>
      ) : (
        <BackgroundImage />
      )}
      
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.8), transparent)',
          zIndex: 1,
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          opacity: 0.2,
          zIndex: 2,
        }}
      />

      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Badge elevation={0}>
          <Typography variant="caption" color="primary.main" fontWeight="bold" letterSpacing="widest">
            {t('hero_badge')}
          </Typography>
        </Badge>

        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, 
            mb: { xs: 2, md: 3 }, 
            lineHeight: 1.1,
            fontWeight: 'bold'
          }}
        >
          <Box component="span" color="white">
            {t('hero_title_1')}
          </Box>
          <br />
          <GradientText 
            variant="h1" 
            component="span" 
            sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' } }}
          >
            {t('hero_title_2')}
          </GradientText>
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ 
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }, 
            maxWidth: { xs: '90%', sm: 'md' }, 
            mx: 'auto', 
            mb: { xs: 4, md: 5 }, 
            lineHeight: 1.7,
            px: { xs: 2, sm: 0 }
          }}
        >
          {t('hero_desc')}
        </Typography>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={{ xs: 2, sm: 3 }} 
          justifyContent="center"
          alignItems="center"
          sx={{ px: { xs: 2, sm: 0 } }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{
              boxShadow: '0 0 20px rgba(255,102,0,0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 0 30px rgba(255,102,0,0.6)',
                transform: 'translateY(-4px)',
              },
            }}
          >
            {t('btn_start')}
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{
              borderColor: 'rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.7)',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main',
              },
            }}
          >
            {t('btn_more')}
          </Button>
        </Stack>
      </Container>

      <ScrollIndicator onClick={scrollToAbout}>
        <KeyboardArrowDownIcon fontSize="large" />
      </ScrollIndicator>
    </HeroWrapper>
  );
};

export default HeroSection;