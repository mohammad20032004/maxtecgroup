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

const TermsAndConditionsModal = ({ open, onClose }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const sections = [
    { title: t('terms_conditions_definitions'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_usage'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_services'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_quotes'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_customer_obligations'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_payments'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_modifications'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_ip'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_customer_content'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_availability'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_external_links'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_disclaimer'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_liability'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_indemnification'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_termination'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_privacy'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_amendments'), body: t('privacy_policy_intro') },
    { title: t('terms_conditions_law'), body: t('privacy_policy_intro') },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="terms-conditions-title"
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
      <DialogTitle id="terms-conditions-title" sx={{ fontWeight: 900, fontSize: '1.6rem', pt: 3 }}>
        {t('terms_conditions_title')}
      </DialogTitle>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      <DialogContent sx={{ pt: 3, maxHeight: '70vh', overflow: 'auto' }}>
        <Typography variant="body2" color="grey.400" sx={{ lineHeight: 1.8, mb: 3 }}>
          {t('terms_conditions_intro')}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'bold', bgcolor: 'rgba(255,102,0,0.1)', px: 1.5, py: 0.5, borderRadius: 1 }}>
            {t('refund_policy_last_update')}
          </Typography>
        </Box>

        {sections.map((s, idx) => (
          <Box key={idx} sx={{ mb: 4 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 800, 
                mb: 1, 
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontSize: '1.1rem'
              }}
            >
              <Box sx={{ width: 4, height: 18, bgcolor: 'primary.main', borderRadius: 1 }} />
              {s.title}
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ lineHeight: 1.9 }}>
              {s.body}
            </Typography>
          </Box>
        ))}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button 
          onClick={onClose} 
          variant="contained" 
          fullWidth
          sx={{ 
            borderRadius: 2, 
            py: 1.5,
            fontWeight: 'bold',
            textTransform: 'none',
            boxShadow: '0 4px 14px 0 rgba(255,102,0,0.39)'
          }}
        >
          {t('get_started')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TermsAndConditionsModal;
