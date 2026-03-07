import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Chip, Stack } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  transition: 'all 0.4s ease',
  animation: `${scaleIn} 0.5s ease-out`,
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[20],
    '& .project-image': {
      transform: 'scale(1.1)',
    },
    '& .project-overlay': {
      opacity: 1,
    },
  },
}));

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Full-stack online shopping solution',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'AI Analytics Dashboard',
      desc: 'Real-time data visualization system',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Python', 'TensorFlow', 'React'],
    },
    {
      title: 'Mobile Banking App',
      desc: 'Secure financial management app',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      tags: ['React Native', 'Firebase'],
    },
  ];

  return (
    <Box id="projects" component="section" sx={{ py: { xs: 10, md: 20 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" color="primary.main" fontWeight="bold" letterSpacing={2}>
            {t('projects_subtitle')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            {t('projects_title')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProjectCard sx={{ animationDelay: `${index * 0.15}s` }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', height: 250 }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      height: '100%',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.desc}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.tags.map((tag, i) => (
                      <Chip key={i} label={tag} size="small" sx={{ bgcolor: 'primary.main', color: 'white', fontSize: '0.75rem' }} />
                    ))}
                  </Stack>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
