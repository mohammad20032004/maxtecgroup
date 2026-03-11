import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Stack, Button, Chip, Paper } from '@mui/material';
import { styled, keyframes, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import PaletteIcon from '@mui/icons-material/Palette';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  transition: 'all 0.4s ease',
  animation: `${fadeIn} 0.6s ease-out`,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.4s ease',
  },
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: theme.shadows[20],
    borderColor: theme.palette.primary.main,
    '&::before': {
      transform: 'scaleX(1)',
    },
    '& .service-icon': {
      transform: 'scale(1.1) rotate(5deg)',
    },
    '& .arrow-icon': {
      transform: 'translateX(8px)',
    },
  },
}));

const WhyChooseCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}08, transparent)`,
  border: `1px solid ${theme.palette.primary.main}20`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: theme.palette.primary.main,
  },
}));

const PricingCard = styled(Card)(({ theme, featured }) => ({
  height: '100%',
  borderRadius: theme.spacing(2),
  border: featured ? `2px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.divider}`,
  background: featured ? `linear-gradient(135deg, ${theme.palette.primary.main}15, transparent)` : theme.palette.background.paper,
  transition: 'all 0.4s ease',
  position: 'relative',
  transform: featured ? 'scale(1.05)' : 'scale(1)',
  zIndex: featured ? 10 : 1,
  '&:hover': {
    transform: featured ? 'scale(1.08)' : 'translateY(-8px)',
    boxShadow: featured ? `0 20px 60px ${theme.palette.primary.main}40` : theme.shadows[12],
  },
}));
 
const ServicesSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const services = [
    {
      icon: CodeIcon,
      title: t('serv_1_title'),
      desc: t('serv_1_desc'),
      features: t('serv_1_features'),
      price: t('serv_1_price'),
      color: '#FF6600'
    },
    {
      icon: PsychologyIcon,
      title: t('serv_2_title'),
      desc: t('serv_2_desc'),
      features: t('serv_2_features'),
      price: t('serv_2_price'),
      color: '#7877C6'
    },
    {
      icon: SecurityIcon,
      title: t('serv_3_title'),
      desc: t('serv_3_desc'),
      features: t('serv_3_features'),
      price: t('serv_3_price'),
      color: '#FF6767'
    },
    {
      icon: PaletteIcon,
      title: t('serv_4_title'),
      desc: t('serv_4_desc'),
      features: t('serv_4_features'),
      price: t('serv_4_price'),
      color: '#00D4FF'
    },
    {
      icon: LightbulbIcon,
      title: t('serv_5_title'),
      desc: t('serv_5_desc'),
      features: t('serv_5_features'),
      price: t('serv_5_price'),
      color: '#FFB800'
    },
    {
      icon: BuildIcon,
      title: t('serv_6_title'),
      desc: t('serv_6_desc'),
      features: t('serv_6_features'),
      price: t('serv_6_price'),
      color: '#00FF88'
    },
  ];

  const whyChoose = [
    {
      title: t('why_1_title'),
      desc: t('why_1_desc')
    },
    {
      title: t('why_2_title'),
      desc: t('why_2_desc')
    },
    {
      title: t('why_3_title'),
      desc: t('why_3_desc')
    },
    {
      title: t('why_4_title'),
      desc: t('why_4_desc')
    },
  ];

  const pricingPlans = [
    {
      name: t('starter_plan'),
      desc: t('starter_desc'),
      price: '£1,500',
      period: '/month',
      features: [t('ssl_certificate'), t('hosting'), t('monthly_updates'), t('support_24_7')],
      featured: false,
    },
    {
      name: t('professional_plan'),
      desc: t('professional_desc'),
      price: '£3,500',
      period: '/month',
      features: [t('analytics'), t('enterprise_hosting'), t('weekly_updates'), t('support_24_7'), t('daily_backups')],
      featured: true,
    },
    {
      name: t('enterprise_plan'),
      desc: t('enterprise_desc'),
      price: t('custom_pricing'),
      period: '',
      features: [t('custom_solution'), t('dedicated_team'), t('priority_support'), t('enterprise_hosting'), t('high_security'), t('training'), t('sla_guarantee')],
      featured: false,
    },
  ];
  // التمرير إلى سكشن معيّن في الصفحة (مثلاً سكشن التواصل)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // تقدير ارتفاع النافبار
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box id="services" component="section" sx={{ py: { xs: 10, md: 20 }, bgcolor: '#151515' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="overline" color="primary.main" fontWeight="bold" letterSpacing={2} sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
            {t('services_subtitle')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, color: 'white', fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } }}>
            {t('services_title')}
          </Typography>
          <Typography variant="body1" color="grey.400" sx={{ maxWidth: 600, mx: 'auto', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            {t('services_desc')}
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={'center'}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ServiceCard
                  sx={{ animationDelay: `${index * 0.1}s`, width: { xs: '100%', md: 550 } }}
                  onClick={() => scrollToSection('contact')}
                >
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
                    <Stack spacing={1} sx={{ mb: 3 }}>
                      {service.features.split(' • ').map((feature, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: service.color }} />
                          <Typography variant="caption" color="text.secondary">
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" fontWeight="bold" color="primary.main">
                        {service.price}
                      </Typography>
                      <ArrowForwardIcon className="arrow-icon" sx={{ color: 'primary.main', transition: 'all 0.3s ease' }} />
                    </Box>
                  </CardContent>
                </ServiceCard>
              </Grid>
            );
          })}
        </Grid>

        {/* Why Choose Us */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 'bold' }}>
            {t('why_choose_us')}
          </Typography>
          <Grid container spacing={3} justifyContent={'center'}>
            {whyChoose.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <WhyChooseCard sx={{width: {xs: '100%', sm: 350, md: 400}, height: {xs: 'auto',sm:300, md: 300}, animationDelay: `${index * 0.1}s`}}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <StarIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {item.desc}
                  </Typography>
                </WhyChooseCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Pricing Plans */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 'bold' }}>
            {t('pricing_title')}
          </Typography>
          <Typography variant="body1" color="grey.400" sx={{ textAlign: 'center', mb: 6 }}>
            {t('pricing_desc')}
          </Typography>
          <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} sm={12} md={4} key={index}>
                <PricingCard featured={plan.featured} sx={{ 
                  width: {xs: '100%',lg: 350, xl: 400}, 
                  animation: `${fadeIn} 0.6s ease-out`, 
                  animationDelay: `${index * 0.2}s`
                 }}
                 >
                  {plan.featured && (
                    <Box sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)' }}>
                      <Chip label={t('most_popular')} color="primary" />
                    </Box>
                  )}
                  <CardContent sx={{ p: 4, pt: plan.featured ? 6 : 4 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                      {plan.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {plan.desc}
                    </Typography>
                    <Box sx={{ mb: 3, pb: 3, borderBottom: `1px solid ${theme.palette.divider}` }}>
                      <Typography variant="h3" fontWeight="bold" color="primary.main">
                        {plan.price}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {plan.period}
                      </Typography>
                    </Box>
                    <Stack spacing={2} sx={{ mb: 4 }}>
                      {plan.features.map((feature, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button
                      fullWidth
                      variant={plan.featured ? 'contained' : 'outlined'}
                      color="primary"
                      onClick={() => scrollToSection('contact')}
                      sx={{
                        py: 1.5,
                        boxShadow: plan.featured ? '0 0 20px rgba(255,102,0,0.3)' : 'none',
                        '&:hover': {
                          boxShadow: plan.featured ? '0 0 30px rgba(255,102,0,0.5)' : 'none',
                        },
                      }}
                    >
                      {t('get_started')}
                    </Button>
                  </CardContent>
                </PricingCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
