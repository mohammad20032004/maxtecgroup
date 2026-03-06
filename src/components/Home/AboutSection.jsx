import React from 'react';
import { Box, Container, Grid, Typography, Paper, Stack, Card, CardContent, Avatar } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from 'react-i18next';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const FloatingBadge = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  bottom: -24,
  right: -24,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[20],
  animation: `${float} 6s ease-in-out infinite`,
  display: { xs: 'none', md: 'block' },
}));

const StatsCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
  border: `1px solid ${theme.palette.primary.main}30`,
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease',
  animation: `${slideIn} 0.6s ease-out`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[12],
    animation: `${pulse} 2s ease-in-out infinite`,
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main + '10',
    transform: 'translateX(8px)',
  },
}));

const AboutSection = () => {
  const { t } = useTranslation();

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
      py: { xs: 10, md: 20 }, 
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
        background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 103, 103, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: -16,
                  bgcolor: 'primary.main',
                  opacity: 0.2,
                  borderRadius: 4,
                  filter: 'blur(20px)',
                }}
              />
              <Box
                component="img"
                src="https://image.qwenlm.ai/public_source/5d010239-82cb-4e48-9768-ab3c54e066bd/13c08206d-3428-4d27-b99a-b9e2bbeef49c.png"
                alt="Office"
                sx={{
                  width: '200px',
                  borderRadius: 4,
                  boxShadow: 24,
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                }}
              />
              
              <FloatingBadge>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography variant="h3" color="primary.main" fontWeight="900">
                    10+
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.2 }}>
                    <span dangerouslySetInnerHTML={{ __html: t('about_years') }} />
                  </Typography>
                </Stack>
              </FloatingBadge>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                '& span': {
                  borderBottom: '4px solid',
                  borderColor: 'primary.main',
                  pb: 1,
                },
              }}
            >
              <span>{t('about_title')}</span>
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.125rem' }}>
              {t('about_p1')}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.125rem' }}>
              {t('about_p2')}
            </Typography>

            <Box sx={{ mb: 4 }}>
              {features.map((feature, index) => (
                <FeatureItem key={feature.key} sx={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="body1" fontWeight="600">
                    {feature.label}
                  </Typography>
                </FeatureItem>
              ))}
            </Box>

            {/* Stats Cards */}
            <Grid container spacing={2}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Grid item xs={4} key={index}>
                    <StatsCard sx={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent sx={{ textAlign: 'center', py: 2 }}>
                        <Avatar sx={{ 
                          bgcolor: 'primary.main', 
                          mx: 'auto', 
                          mb: 1,
                          width: 40,
                          height: 40
                        }}>
                          <IconComponent sx={{ fontSize: 20 }} />
                        </Avatar>
                        <Typography variant="h6" fontWeight="bold" color="primary.main">
                          {stat.number}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </StatsCard>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;