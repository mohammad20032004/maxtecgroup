import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack, IconButton, useMediaQuery, MenuItem } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
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
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' }); // type: 'success' | 'error' | null
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('form_name') + ' ' + t('is_required', { defaultValue: '' });
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = t('invalid_email') || 'Please enter a valid email.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t('message_too_short') || 'Message should be at least 10 characters.';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // قيم EmailJS - استبدلها من حسابك في EmailJS
    const SERVICE_ID = 'service_h7rvsan';    // استبدلها بـ Service ID من EmailJS
    const TEMPLATE_ID = 'template_6grkof9';  // استبدلها بـ Template ID من EmailJS
    const PUBLIC_KEY = 'bIZQeE78a8NkmVsRD'; // استبدلها بـ Public Key من EmailJS

    const selectedServiceLabel = formData.serviceType || t('service_type_other');

    const templateParams = {
      // هذه الأسماء تتوافق مع القالب الذي ذكرته في EmailJS
      subject: `New Project Inquiry: ${selectedServiceLabel} | MaxTec Group`,
      user_name: formData.name,
      user_email: formData.email,
      service_type: selectedServiceLabel,
      budget: formData.budget || t('budget_not_specified'),
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus({
            type: 'success',
            message: t('contact_success_msg') || 'تم استلام طلبك بنجاح، شكراً لثقتك بنا.',
          });
          setFormData({
            name: '',
            email: '',
            serviceType: '',
            budget: '',
            message: '',
          });
        },
        () => {
          setStatus({
            type: 'error',
            message: t('contact_error_msg') || 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',
          });
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    { icon: EmailIcon, text: 'maxtecgroup.co@gmail.com', color: '#FF6600' },
    { icon: LocationOnIcon, text: 'London, United Kingdom', color: '#FF6767' },
  ];

  const isArabic = i18n.language === 'ar';

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 10, md: 20 },
        bgcolor: '#151515',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          direction: isArabic ? 'rtl' : 'ltr',
        }}
      >
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

        <Grid container spacing={isMdUp ? 6 : 4} justifyContent="center" alignItems="stretch">
          {/* Contact info card */}
          <Grid item xs={12} md={5} sx={{ order: isMdUp ? 1 : 2 }}>
            <ContactCard elevation={2} sx={{ width: {xs: '100%', md: 500} }}>
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
                      <Typography variant="body1" fontSize={isMdUp ? 18 : 14}>{item.text}</Typography>
                    </InfoItem>
                  );
                })}
              </Stack>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Follow Us
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
              </Box>
            </ContactCard>
          </Grid>

          {/* Contact form card */}
          <Grid item xs={12} md={7} sx={{ order: isMdUp ? 2 : 1 }}>
            <ContactCard elevation={2} sx={{ width: {xs: '100%', md: 500} }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
                {t('form_btn')}
              </Typography>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  {status.type && (
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 1,
                        fontSize: 14,
                        bgcolor: status.type === 'success' ? 'success.main' : 'error.main',
                        color: '#fff',
                      }}
                    >
                      {status.message}
                    </Box>
                  )}
                  <TextField
                    fullWidth
                    label={t('form_name')}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={!!errors.name}
                    helperText={errors.name}
                    InputLabelProps={{
                      sx: {
                        ...(isArabic && { right: 0, left: 'auto', transformOrigin: 'top right' }),
                      },
                    }}
                    inputProps={{
                      style: {
                        textAlign: isArabic ? 'right' : 'left',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label={t('form_email')}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                    InputLabelProps={{
                      sx: {
                        ...(isArabic && { right: 0, left: 'auto', transformOrigin: 'top right' }),
                      },
                    }}
                    inputProps={{
                      style: {
                        textAlign: isArabic ? 'right' : 'left',
                      },
                    }}
                  />
                  <TextField
                    select
                    fullWidth
                    label={t('form_service_type')}
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    InputLabelProps={{
                      sx: {
                        ...(isArabic && { right: 0, left: 'auto', transformOrigin: 'top right' }),
                      },
                    }}
                    inputProps={{
                      style: {
                        textAlign: isArabic ? 'right' : 'left',
                      },
                    }}
                  >
                    <MenuItem value="Web & App Development">{t('service_type_web')}</MenuItem>
                    <MenuItem value="AI & Data / Analytics">{t('service_type_ai')}</MenuItem>
                    <MenuItem value="Cyber Security">{t('service_type_cyber')}</MenuItem>
                    <MenuItem value="UI/UX Design">{t('service_type_uiux')}</MenuItem>
                    <MenuItem value="Tech Consulting">{t('service_type_consulting')}</MenuItem>
                    <MenuItem value="Other">{t('service_type_other')}</MenuItem>
                  </TextField>
                  <TextField
                    select
                    fullWidth
                    label={t('form_budget')}
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        ...(isArabic && { right: 0, left: 'auto', transformOrigin: 'top right' }),
                      },
                    }}
                    inputProps={{
                      style: {
                        textAlign: isArabic ? 'right' : 'left',
                      },
                    }}
                  >
                    <MenuItem value="£1,000 - £3,000">{t('budget_small')}</MenuItem>
                    <MenuItem value="£3,000 - £7,000">{t('budget_medium')}</MenuItem>
                    <MenuItem value="£7,000 - £15,000">{t('budget_large')}</MenuItem>
                    <MenuItem value="£15,000+">{t('budget_enterprise')}</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    label={t('form_msg')}
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    error={!!errors.message}
                    helperText={errors.message}
                    InputLabelProps={{
                      sx: {
                        ...(isArabic && { right: 0, left: 'auto', transformOrigin: 'top right' }),
                      },
                    }}
                    inputProps={{
                      style: {
                        textAlign: isArabic ? 'right' : 'left',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    disabled={isSubmitting}
                    sx={{
                      py: 1.5,
                      boxShadow: '0 0 20px rgba(255,102,0,0.3)',
                      '&:hover': {
                        boxShadow: !isSubmitting ? '0 0 30px rgba(255,102,0,0.5)' : '0 0 20px rgba(255,102,0,0.3)',
                        transform: !isSubmitting ? 'translateY(-2px)' : 'none',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {isSubmitting ? t('sending') || 'جاري الإرسال...' : t('form_btn')}
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
