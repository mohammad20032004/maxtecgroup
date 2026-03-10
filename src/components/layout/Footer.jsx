import React from 'react';
import { Box, Container, Typography, Grid, Stack, IconButton, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('nav_home'), href: '#home' },
    { label: t('nav_about'), href: '#about' },
    { label: t('nav_services'), href: '#services' },
    { label: t('nav_projects'), href: '#projects' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: '#0a0a0a', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: 'primary.main', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              MaxTec Group
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ mb: 3, lineHeight: 1.8, fontSize: { xs: '0.85rem', md: '0.875rem' } }}>
              {t('hero_desc').substring(0, 120)}...
            </Typography>
                <Stack direction="row" spacing={1}>
                  {[
                    { Icon: LinkedInIcon, href: '#' },
                    { Icon: FacebookIcon, href: 'https://www.facebook.com/share/14XnwSYsWeS/' },
                    { Icon: GitHubIcon, href: 'https://github.com/maxtecgroup' },
                  ].map(({ Icon, href }, i) => (
                    <IconButton
                      key={i}
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'primary.dark', transform: 'translateY(-4px)' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Icon />
                    </IconButton>
                  ))}
                </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link, i) => (
                <Typography
                  key={i}
                  component="a"
                  href={link.href}
                  variant="body2"
                  sx={{
                    color: 'grey.400',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': { color: 'primary.main', paddingLeft: 1 },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
              {t('contact_info_title')}
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="grey.400">
                📧 maxtecgroup.co@gmail.com
              </Typography>
              <Typography variant="body2" color="grey.400">
                📞 +44 20 1234 5678
              </Typography>
              <Typography variant="body2" color="grey.400">
                📍 London, United Kingdom
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Typography variant="body2" color="grey.500" textAlign="center">
          {t('footer_rights')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
