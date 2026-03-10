import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageDropdown from '../Common/LanguageDropdown';
import Logo from '../../assets/Logo.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(10, 10, 10, 0.95)',
  backdropFilter: 'blur(20px)',
  borderBottom: `1px solid ${theme.palette.primary.main}20`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
  fontSize: '0.95rem',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: `${theme.palette.primary.main}10`,
    transform: 'translateY(-1px)',
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t, i18n } = useTranslation();

  const navItems = [
    { key: 'home', label: t('nav_home') },
    { key: 'about', label: t('nav_about') },
    { key: 'services', label: t('nav_services') },
    { key: 'projects', label: t('nav_projects') },
    { key: 'contact', label: t('nav_contact') },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // تقدير ارتفاع النافبار
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <List sx={{ bgcolor: 'background.paper', height: '100%', pt: 2 }}>
      {navItems.map((item) => (
        <ListItem key={item.key} disablePadding sx={{ px: 1 }}>
          <ListItemButton 
            onClick={() => scrollToSection(item.key)}
            sx={{
              borderRadius: 2,
              mx: 1,
              '&:hover': {
                bgcolor: `${theme.palette.primary.main}15`,
                color: theme.palette.primary.main,
              },
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                textAlign: i18n.language === 'ar' ? 'right' : 'left',
                '& .MuiTypography-root': {
                  fontWeight: 600,
                },
              }} 
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          <LogoBox onClick={() => scrollToSection('home')}>
            <Box
              component="img"
              src={Logo}
              alt="MaxTec Group"
              sx={{
                height: 50,
                width: 'auto',
              }}
            />
          </LogoBox>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <NavLink key={item.key} onClick={() => scrollToSection(item.key)}>
                  {item.label}
                </NavLink>
              ))}
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LanguageDropdown />
            {isMobile && (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}20`,
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor={i18n.language === 'ar' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            bgcolor: 'background.paper',
            borderRight: i18n.language === 'ar' ? 'none' : `1px solid ${theme.palette.primary.main}30`,
            borderLeft: i18n.language === 'ar' ? `1px solid ${theme.palette.primary.main}30` : 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
};

export default Navbar;