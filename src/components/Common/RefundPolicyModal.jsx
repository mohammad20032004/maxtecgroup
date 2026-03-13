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

const RefundPolicyModal = ({ open, onClose }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const sections = [
    { title: t('refund_policy_nature'), body: t('refund_policy_nature_desc') },
    { title: t('refund_policy_deposits'), body: t('refund_policy_deposits_desc') },
    { title: t('refund_policy_phases'), body: t('refund_policy_phases_desc') },
    { title: t('refund_policy_non_refundable'), body: t('refund_policy_non_refundable_desc') },
    { title: t('refund_policy_cases'), body: t('refund_policy_cases_desc') },
    { title: t('refund_policy_rejection'), body: t('refund_policy_rejection_desc') },
    { title: t('refund_policy_correction'), body: t('refund_policy_correction_desc') },
    { title: t('refund_policy_process'), body: t('refund_policy_process_desc') },
    { title: t('refund_policy_review_period'), body: t('refund_policy_review_period_desc') },
    { title: t('refund_policy_customer_cancellation'), body: t('refund_policy_customer_cancellation_desc') },
    { title: t('refund_policy_our_cancellation'), body: t('refund_policy_our_cancellation_desc') },
    { title: t('refund_policy_law'), body: t('refund_policy_law_desc') },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          direction: isArabic ? 'rtl' : 'ltr',
          borderRadius: 4,
          bgcolor: '#0f0f0f',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.08)',
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 900, fontSize: '1.6rem', pt: 3 }}>
        {t('refund_policy_title')}
      </DialogTitle>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      <DialogContent sx={{ pt: 3, maxHeight: '70vh', overflow: 'auto' }}>
        <Typography variant="body2" color="grey.400" sx={{ lineHeight: 1.8, mb: 3 }}>
          {t('refund_policy_intro')}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'bold', bgcolor: 'rgba(255,102,0,0.1)', px: 1.5, py: 0.5, borderRadius: 1 }}>
            {t('refund_policy_last_update')}
          </Typography>
        </Box>

        {sections.map((s, idx) => (
          <Box key={idx} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.1rem', color: '#fff' }}>
              {s.title}
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ lineHeight: 1.9 }}>
              {s.body}
            </Typography>
          </Box>
        ))}

        <Box sx={{ mt: 5, p: 2, borderRadius: 2, border: '1px dashed rgba(255,255,255,0.2)', textAlign: 'center' }}>
          <Typography variant="body2" color="primary.light">
            {t('contact_email')}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button 
          onClick={onClose} 
          variant="contained" 
          fullWidth
          sx={{ py: 1.5, fontWeight: 'bold', borderRadius: 2 }}
        >
          {t('get_started')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RefundPolicyModal;
