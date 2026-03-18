import React from 'react';
import { Box, Container, Typography, Grid, Stack, IconButton, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/Phone';
const Footer = ({ onOpenPrivacy, onOpenRefund, onOpenCookies, onOpenTerms }) => {
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
                /*{ Icon: LinkedInIcon, href: '#' },*/
                { Icon: FacebookIcon, href: 'https://www.facebook.com/share/14XnwSYsWeS/' },
                { Icon: GitHubIcon, href: 'https://github.com/maxtecgroup' },
              ].map(({ Icon, href }, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={href.includes('facebook') ? 'Open MaxTec Group Facebook page' : 'Open MaxTec Group GitHub profile'}
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
                <EmailIcon
                 sx={{ fontSize: 16, mx: 1 }} /> support@maxtecgroup.net
              </Typography>
              <Typography variant="body2" color="grey.400">
                <Phone
                 sx={{ fontSize: 16, mx: 1 }} /> +44 7848 103853
              </Typography>
              <Typography variant="body2" color="grey.400">
                <LocationOnIcon
                 sx={{ fontSize: 16, mx: 1 }} />  London, United Kingdom
              </Typography>
              <Typography
                component="button"
                type="button"
                onClick={onOpenPrivacy}
                variant="body2"
                style={{
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{t('privacy_policy_title')}</span>
              </Typography>
              <Typography
                component="button"
                type="button"
                onClick={onOpenRefund}
                variant="body2"
                style={{
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{t('refund_policy_title')}</span>
              </Typography>
              <Typography
                component="button"
                type="button"
                onClick={onOpenCookies}
                variant="body2"
                style={{
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{t('cookies_policy_title')}</span>
              </Typography>
              <Typography
                component="button"
                type="button"
                onClick={onOpenTerms}
                variant="body2"
                style={{
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{t('terms_conditions_title')}</span>
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
