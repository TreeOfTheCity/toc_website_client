import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import FoodDistributionImg from '../../assets/images/food_distribution.jpg';
import GermanLanguageImg from '../../assets/images/german_language.jpg';
import TreePlantationImg from '../../assets/images/plantation.png';
import BlanketDistributionImg from '../../assets/images/blanket_distribution.jpg';

const EventCard = ({ title, description, place, date }) => (
  <Box
    width={'100%'}
    bgcolor={'#e8f1f2'}
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    borderRadius={'2%'}
    component={Paper}
    p={2}
    height={400}
  >
    <Box sx={{ width: '100%' }}>
      <Typography
        fontFamily={'Wix Madefor Display'}
        fontWeight={600}
        fontSize={22}
        color={'#03045e'}
        textAlign={'center'}
      >
        {title}
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', ml: 5 }}>
      <Box sx={{ m: 3 }}>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ fontFamily: 'Wix MadeFor Display', textAlign: 'justify' }}>
            {description}
          </Typography>
        </Box>

        <Box sx={{ mt: 5 }} width={'100%'}>
          <Typography textAlign={'left'} fontFamily={'Wix MadeFor Display'} fontWeight={700}>
            {place}
          </Typography>
          <Typography textAlign={'left'} mt={1} fontFamily={'Wix MadeFor Display'} fontWeight={700}>
            {date}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

const Events = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const causesCards = [
    {
      title: 'Tree Plantation',
      image: TreePlantationImg,
      description:
        'Our tree-planting efforts are intended to help fight climate change and preserve the ecosystem. With consideration for the local ecosystem and climate, our team of specialists will choose native tree species. These species were picked because of their propensity to survive and offer long-term advantages',
      date: ` 14th July 2022 `,
      place: 'Gandhi Path West, Jaipur',
    },
    {
      title: 'Food Distribution',
      image: FoodDistributionImg,
      description: 'Monthly food distributions, every month 2nd and 4th Saturday',
      date: ` Every month 2nd and 4th Saturday `,
      place: 'Jaipur',
    },
    {
      title: 'German Language Course',
      description:
        'The Free German Language Course aims to give learners a strong foundation in the language. This course will help you develop your German language abilities and boost your confidence in speaking, listening, reading, and writing, regardless of your level of experience or prior knowledge',
      image: GermanLanguageImg,
      date: ` 15th August 2022 `,
      place: 'Remote | Online',
    },
    {
      title: 'Blanket Distribution',
      description:
        'The blanket distribution event aims to provide warmth and comfort to individuals in need during cold weather conditions. It is an initiative to support vulnerable populations and ensure their well-being during harsh winters.',
      image: BlanketDistributionImg,
      date: ` 1st November 2022 `,
      place: 'Vaishali Nagar Road side area',
    },
    {
      title: 'German Language Course',
      description:
        'The Free German Language Course aims to give learners a strong foundation in the language. This course will help you develop your German language abilities and boost your confidence in speaking, listening, reading, and writing, regardless of your level of experience or prior knowledge',
      image: GermanLanguageImg,
      date: ` 22nd October 2022 `,
      place: 'Remote | Online',
    },
    {
      title: 'Tree Plantation',
      image: TreePlantationImg,
      description:
        'Our tree-planting efforts are intended to help fight climate change and preserve the ecosystem. With consideration for the local ecosystem and climate, our team of specialists will choose native tree species. These species were picked because of their propensity to survive and offer long-term advantages',
      date: ` 2nd October 2022 `,
      place: 'Kalawara Village, Jaipur',
    },
    {
      title: 'Tree Plantation',
      image: TreePlantationImg,
      description:
        'Our tree-planting efforts are intended to help fight climate change and preserve the ecosystem. With consideration for the local ecosystem and climate, our team of specialists will choose native tree species. These species were picked because of their propensity to survive and offer long-term advantages',
      date: ` 1st January 2022 `,
      place: 'Gandhi Path West, Jaipur',
    },
  ];

  const handleCardTransition = () => {
    try {
      if (cardIndex + 2 <= causesCards.length - 1) {
        setCardIndex((i) => i + 2);
      } else {
        setCardIndex(0);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleCardTransition();
    }, 3000);
  }, [cardIndex]);

  return (
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
        Events that we have <br /> conducted
      </Typography>

      <Grid container spacing={2} mt={5} justifyContent={'center'}>
        {causesCards[cardIndex] ? (
          <Grid item xs={12} md={6}>
            <EventCard {...causesCards[cardIndex]} />
          </Grid>
        ) : null}
        {causesCards[cardIndex + 1] ? (
          <Grid item xs={12} md={6}>
            <EventCard {...causesCards[cardIndex + 1]} />
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
};

export default Events;
