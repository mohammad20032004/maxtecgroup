import React from 'react';
import { Box, Container, Grid, Typography, Paper, Stack, Card, CardContent, Avatar } from '@mui/material';
import { styled, keyframes, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from 'react-i18next';

// تأثير الطفو للبطاقة العائمة
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;


const StatsCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}08, transparent)`,
  border: `1px solid ${theme.palette.primary.main}20`,
  borderRadius: theme.spacing(2),
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  height: '100%',
  animation: `${slideUp} 0.6s ease-out backwards`,
  backdropFilter: 'blur(10px)',
  '&:hover': {
    transform: 'translateY(-10px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 15px 30px -10px ${theme.palette.primary.main}40`,
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2),
  margin: '2px 20px',
  borderRadius: theme.spacing(1.5),
  border: '1px solid transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(8px)',
  },
}));

const AboutSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const features = [
    { key: 'feature_1', label: t('feature_1') },
    { key: 'feature_2', label: t('feature_2') },
    { key: 'feature_3', label: t('feature_3') },
    { key: 'feature_4', label: t('feature_4') },
  ];

  const stats = [
    { icon: TrendingUpIcon, number: '150+', label: t('projects_completed') || 'مشروع مكتمل' },
    { icon: GroupsIcon, number: '50+', label: t('happy_clients') || 'عميل راضي' },
    { icon: StarIcon, number: '4.9', label: t('rating') || 'تقييم' },
  ];

  return (
    <Box id="about" component="section" sx={{
      py: { xs: 10, md: 15 },
      bgcolor: 'background.default',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(255, 102, 0, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 158, 89, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
      }
    }}>
      <Container maxWidth="xl+" sx={{ position: 'relative', zIndex: 1 }}>

        <Typography
          variant="h2"
          sx={{
            mb: 3,
            fontWeight: 800,
            '& span': {
              borderBottom: '4px solid',
              borderColor: 'primary.main',
              pb: 1,
            },
          }}
        >
          <span>{t('about_title')}</span>
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8, fontSize: '1.1rem' }}>
          {t('about_p1')}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
          {t('about_p2')}
        </Typography>

{features.map((feature, index) => (
           
              <FeatureItem>
 <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                <Typography variant="body1" fontWeight="600">
                  {feature.label}
                </Typography>
</FeatureItem>))}


        <Grid container spacing={2} justifyContent={'center'}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Grid item xs={12} sm={4} key={index}>
                <StatsCard sx={{ animationDelay: `${index * 0.15}s`, width: 200 }}>
                  <CardContent sx={{ textAlign: 'center', py: 2, px: 1 }}>
                    <Avatar sx={{
                      bgcolor: 'background.paper',
                      color: 'primary.main',
                      border: `1px solid ${theme.palette.primary.main}40`,
                      mx: 'auto',
                      mb: 1.5,
                      width: 40,
                      height: 40
                    }}>
                      <IconComponent sx={{ fontSize: 20 }} />
                    </Avatar>
                    <Typography variant="h6" fontWeight="900" color="primary.main" sx={{ mb: 0.5 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" fontWeight="600" sx={{ display: 'block' }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </StatsCard>
              </Grid>
            );
          })}
        </Grid>

      </Container>
    </Box>
  );
};

export default AboutSection;