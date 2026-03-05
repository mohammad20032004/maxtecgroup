import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/Home/HeroSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar />
        
        {/* Hero Section */}
        <HeroSection />
        
        <Box id="about" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100' }}>
          <h1>About Section</h1>
        </Box>
        
        <Box id="services" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Services Section</h1>
        </Box>
        
        <Box id="projects" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100' }}>
          <h1>Projects Section</h1>
        </Box>
        
        <Box id="contact" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Contact Section</h1>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;