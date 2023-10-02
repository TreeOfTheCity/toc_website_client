import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { bgBlur } from '../../utils/cssStyles';

const Mission = () => {
  const cards = [
    {
      title: 'Bird Feeding',
      icon: 'ph:bird-fill',
      bodyText:
        'To work with objective to establish a awareness and take care of the animals who required help in urban and rural area in India.',
      minorText: 'Help bird & Animals',
    },
    {
      title: 'Skill Development',
      icon: 'cib:skillshare',
      bodyText:
        'Skill Development is a short program to prepare fresher students for entry level jobs, so that they can earn with study.',
      minorText: 'Help to develop skills',
    },
    {
      title: 'Tree Plantation',
      icon: 'mingcute:tree-2-fill',
      bodyText:
        'To work with objective to establish a clean environment and growth of plants & plantation of small Plants in urban and rural area in India and also care for their growth.',
      minorText: 'Care for Nature',
    },
    {
      title: 'Help inidividuals grow',
      icon: 'lucide:users',
      bodyText: 'To work with objective to establish a helping, caring & supporting environment for needy people.',
      minorText: 'We rely on people',
    },
  ];

  return (
    <Container sx={{ mt: 10, textAlign: 'center', ...bgBlur({ color: '#e8f1f2' }), padding: 2 }} component={Paper}>
      <Box>
        <Typography variant="h2" sx={{ fontFamily: 'Wix Madefor Display', color: '#03045e', fontWeight: 600 }}>
          What TCF is inclided to
        </Typography>
      </Box>

      <motion.div
      //   initial={{ opacity: 0, scale: 0.5 }}
      //   animate={{ opacity: 1, scale: 1 }}
      //   transition={{ duration: 1 }}
      //   style={{ scaleX: scrollYProgress }}
      //   style={{ x }}
      >
        <Grid container spacing={8} mt={1}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box>
                <Box sx={{ my: 1 }}>
                  <Typography fontFamily={'Wix Madefor Display'}>{card.minorText}</Typography>
                </Box>
                <Box
                  height={400}
                  width={'100%'}
                  bgcolor={'#09cc7f'}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={'2%'}
                  component={Paper}
                  elevation={5}
                >
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      height: 70,
                      width: 70,
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      borderRadius: '50%',
                    }}
                  >
                    <Icon icon={card.icon} width={40} height={40} />
                  </Box>
                  <Box mt={2}>
                    <Typography fontFamily={'Wix Madefor Display'} fontWeight={500}>
                      {card.title}
                    </Typography>
                    <Typography fontFamily={'Wix Madefor Display'} fontSize={13} mt={1} px={5}>
                      {card.bodyText}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Mission;
