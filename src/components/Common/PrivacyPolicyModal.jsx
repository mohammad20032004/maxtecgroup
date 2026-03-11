import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyModal = ({ open, onClose }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const sections = [
    { title: t('privacy_section_1_title'), body: t('privacy_section_1_body') },
    { title: t('privacy_section_2_title'), body: t('privacy_section_2_body') },
    { title: t('privacy_section_3_title'), body: t('privacy_section_3_body') },
    { title: t('privacy_section_4_title'), body: t('privacy_section_4_body') },
    { title: t('privacy_section_5_title'), body: t('privacy_section_5_body') },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="privacy-policy-title"
      PaperProps={{
        sx: {
          direction: isArabic ? 'rtl' : 'ltr',
          borderRadius: 3,
          bgcolor: '#0f0f0f',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.08)',
        },
      }}
    >
      <DialogTitle id="privacy-policy-title" sx={{ fontWeight: 800 }}>
        {t('privacy_title')}
      </DialogTitle>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
      <DialogContent sx={{ pt: 3 }}>
        <Typography variant="body2" color="grey.300" sx={{ lineHeight: 1.9, mb: 2 }}>
          {t('privacy_intro')}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" color="grey.500">
            {t('privacy_last_updated')}
          </Typography>
        </Box>

        {sections.map((s, idx) => (
          <Box key={idx} sx={{ mb: 2.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, fontSize: { xs: '1rem', md: '1.1rem' } }}>
              {s.title}
            </Typography>
            <Typography variant="body2" color="grey.300" sx={{ lineHeight: 1.9, whiteSpace: 'pre-line' }}>
              {s.body}
            </Typography>
          </Box>
        ))}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onClose} variant="contained" color="primary">
          {t('close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyPolicyModal;

