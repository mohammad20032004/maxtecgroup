import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[12],
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main + '10',
  },
}));

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const contactInfo = [
    { icon: EmailIcon, text: 'info@maxtecgroup.co.uk', color: '#FF6600' },
    { icon: PhoneIcon, text: '+44 20 1234 5678', color: '#7877C6' },
    { icon: LocationOnIcon, text: 'London, United Kingdom', color: '#FF6767' },
  ];

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 10, md: 20 }, bgcolor: '#151515' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" color="primary.main" fontWeight="bold" letterSpacing={2} sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
            {t('contact_info_title')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, color: 'white', fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } }}>
            {t('nav_contact')}
          </Typography>
          <Typography variant="body1" color="grey.400" sx={{ maxWidth: 600, mx: 'auto', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            {t('contact_info_desc')}
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent={'center'}>
          <Grid item xs={12} md={5}>
            <ContactCard elevation={2}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
                {t('contact_info_title')}
              </Typography>
              
              <Stack spacing={2} sx={{ mb: 4 }}>
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <InfoItem key={index}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          bgcolor: item.color + '20',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComponent sx={{ color: item.color }} />
                      </Box>
                      <Typography variant="body1">{item.text}</Typography>
                    </InfoItem>
                  );
                })}
              </Stack>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={1}>
                  {[LinkedInIcon, FacebookIcon, GitHubIcon].map((Icon, i) => (
                    <IconButton
                      key={i}
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
              </Box>
            </ContactCard>
          </Grid>

          <Grid item xs={12} md={7}>
            <ContactCard elevation={2}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
                {t('form_btn')}
              </Typography>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label={t('form_name')}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label={t('form_email')}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label={t('form_msg')}
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.5,
                      boxShadow: '0 0 20px rgba(255,102,0,0.3)',
                      '&:hover': {
                        boxShadow: '0 0 30px rgba(255,102,0,0.5)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {t('form_btn')}
                  </Button>
                </Stack>
              </form>
            </ContactCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
