import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { projectsCards } from './data';

const trimText = (text) => {
  if (text) {
    return `${text.substring(0, 55)}...`;
  }
  return '';
};

const CustomAccordion = ({ summary, details, conclusion }) => (
  <Accordion sx={{ m: 1 }}>
    <AccordionSummary expandIcon={<Icon icon={'iconamoon:arrow-down-2-duotone'} size={20} />}>
      {summary}:
    </AccordionSummary>
    <AccordionDetails sx={{ width: '100%', mt: 1 }}>
      <Box>
        <Typography
          sx={{ textAlign: 'justify' }}
          fontFamily={'Wix MadeFor Display'}
          fontWeight={600}
          fontSize={15}
          gutterBottom
        >
          {summary}:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {details.map((ob, index) => (
            <Box key={index}>
              <Typography textAlign={'left'}>
                {index + 1}. {ob}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </AccordionDetails>
  </Accordion>
);

const ProjectCard = ({ title, image, intro, conclusion, tagline, ...rest }) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={12} component={Paper}>
      {/* <Box>
        <img alt={title} src={image} style={{ width: '50%', height: '60%', borderRadius: 5 }} />
      </Box> */}

      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{ textAlign: 'left' }}
          fontFamily={'Wix MadeFor Display'}
          fontWeight={600}
          fontSize={20}
          gutterBottom
        >
          {title}
        </Typography>
      </Box>

      <Box mt={2} mb={5}>
        <Typography sx={{ textAlign: 'left' }} fontFamily={'Wix MadeFor Display'}>
          {intro}
        </Typography>
      </Box>

      {Object.keys(rest).map((k, index) => (
        <CustomAccordion summary={rest[k].title} details={rest[k].items} key={index} />
      ))}

      <Box mt={3} mb={1}>
        <Typography sx={{ textAlign: 'left' }} fontFamily={'Wix MadeFor Display'}>
          {conclusion}
        </Typography>
      </Box>
      <Box mt={1} mb={5}>
        <Typography sx={{ textAlign: 'left' }} fontFamily={'Wix MadeFor Display'} fontWeight={500}>
          {tagline}
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const Projects = () => (
  <Container sx={{ textAlign: 'center', mt: 10, padding: 2 }}>
    <Typography
      sx={{
        fontFamily: 'Wix Madefor Display',
        color: '#03045e',
        fontWeight: 600,
        textAlign: 'center',
      }}
      variant="h2"
    >
      Projects Undertaking
    </Typography>

    <Grid container spacing={4} mt={6} justifyContent={'center'}>
      {projectsCards.map((card, index) => (
        <Grid item xs={12} md={12} key={index}>
          <ProjectCard {...card} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
