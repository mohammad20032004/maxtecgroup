import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/Home/HeroSection';
import AboutSection from './components/About/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';
import PrivacyPolicyModal from './components/Common/PrivacyPolicyModal';
import RefundPolicyModal from './components/Common/RefundPolicyModal';
import CookiePolicyModal from './components/Common/CookiePolicyModal';
import TermsAndConditionsModal from './components/Common/TermsAndConditionsModal';

function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [refundOpen, setRefundOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer 
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onOpenRefund={() => setRefundOpen(true)}
          onOpenCookies={() => setCookiesOpen(true)}
          onOpenTerms={() => setTermsOpen(true)}
        />
        
        {/* Policy Modals */}
        <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
        <RefundPolicyModal open={refundOpen} onClose={() => setRefundOpen(false)} />
        <CookiePolicyModal open={cookiesOpen} onClose={() => setCookiesOpen(false)} />
        <TermsAndConditionsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      </Box>
    </ThemeProvider>
  );
}

export default App;