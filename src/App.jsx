import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/Home/HeroSection';
import AboutSection from './components/About/AboutSection';
import ServicesSection from './components/Home/ServicesSection';
import ProjectsSection from './components/Home/ProjectsSection';
import ContactSection from './components/Home/ContactSection';

function App() {
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
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;