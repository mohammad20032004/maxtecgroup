import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ServiceCard = styled(Card)(({ theme }) => (({
  height: '100%',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  transition: 'all 0.4s ease',
  animation: `${fadeIn} 0.6s ease-out`,
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: theme.shadows[20],
    borderColor: theme.palette.primary.main,
    '& .service-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    },
    '& .arrow-icon': {
      transform: 'translateX(8px)',
    },
  },
})));

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    { icon: CodeIcon, title: t('serv_1_title'), desc: t('serv_1_desc'), color: '#FF6600' },
    { icon: PsychologyIcon, title: t('serv_2_title'), desc: t('serv_2_desc'), color: '#7877C6' },
    { icon: SecurityIcon, title: t('serv_3_title'), desc: t('serv_3_desc'), color: '#FF6767' },
  ];

  return (
    <Box id="services" component="section" sx={{ py: { xs: 10, md: 20 }, bgcolor: '#151515' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" color="primary.main" fontWeight="bold" letterSpacing={2}>
            {t('services_subtitle')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, color: 'white' }}>
            {t('services_title')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <ServiceCard sx={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent sx={{ p: 4 }}>
                    <Avatar
                      className="service-icon"
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: service.color + '20',
                        mb: 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <IconComponent sx={{ fontSize: 35, color: service.color }} />
                    </Avatar>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                      {service.desc}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', fontWeight: 600 }}>
                      <Typography variant="body2">{t('read_more')}</Typography>
                      <ArrowForwardIcon className="arrow-icon" sx={{ ml: 1, fontSize: 18, transition: 'all 0.3s ease' }} />
                    </Box>
                  </CardContent>
                </ServiceCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
