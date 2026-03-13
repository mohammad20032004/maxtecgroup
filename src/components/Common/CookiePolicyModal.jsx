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

const CookiePolicyModal = ({ open, onClose }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const sections = [
    { title: t('cookies_policy_what_are'), body: t('privacy_policy_intro') },
    { title: t('cookies_policy_types'), body: t('privacy_policy_intro') },
    { title: t('cookies_policy_legal_basis'), body: t('privacy_policy_intro') },
    { title: t('cookies_policy_manage'), body: t('privacy_policy_intro') },
    { title: t('cookies_policy_third_party'), body: t('privacy_policy_intro') },
    { title: t('cookies_policy_duration'), body: t('privacy_policy_intro') },
    { title: t('cookies_policy_changes'), body: t('privacy_policy_intro') },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="cookies-policy-title"
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
      <DialogTitle id="cookies-policy-title" sx={{ fontWeight: 800, fontSize: '1.6rem', pt: 3 }}>
        {t('cookies_policy_title')}
      </DialogTitle>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
      <DialogContent sx={{ pt: 3, maxHeight: '70vh', overflow: 'auto' }}>
        <Typography variant="body2" color="grey.300" sx={{ lineHeight: 1.9, mb: 3 }}>
          {t('privacy_policy_intro')}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="caption" color="grey.500" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            {t('refund_policy_last_update')}
          </Typography>
        </Box>

        {sections.map((s, idx) => (
          <Box key={idx} sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.1rem', color: '#fff' }}>
              {s.title}
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ lineHeight: 1.9 }}>
              {s.body}
            </Typography>
          </Box>
        ))}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} variant="contained" fullWidth sx={{ py: 1.5, fontWeight: 'bold', borderRadius: 2 }}>
          {t('get_started')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CookiePolicyModal;
