import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  // رادار الجوال: يعمل إذا كانت الشاشة أصغر من 900 بكسل (md)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    document.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    handleClose();
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <Box>
      {isMobile ? (
        <IconButton 
          onClick={handleClick} 
          sx={{ 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            width: 40,
            height: 40
          }}
        >
          <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{currentLanguage.flag}</span>
        </IconButton>
      ) : (
        /* تصميم الكمبيوتر: زر كامل يحتوي على العلم والاسم والسهم */
        <Button
          onClick={handleClick}
          endIcon={<ExpandMoreIcon />}
          variant="outlined"
          sx={{
            color: 'text.secondary',
           border: 'none',
            textTransform: 'none',
            px: 1.5,
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{currentLanguage.flag}</span>
            <span>{currentLanguage.name}</span>
          </Box>
        </Button>
      )}

      {/* القائمة المنسدلة (Menu) تظل كما هي للكمبيوتر والجوال */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 1.5,
            minWidth: 150,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={i18n.language === language.code}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&.Mui-selected': {
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <span style={{ fontSize: '1.2rem' }}>{language.flag}</span>
            </ListItemIcon>
            <ListItemText primary={language.name} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageDropdown;