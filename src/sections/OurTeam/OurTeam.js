import React from 'react';
import { Typography, Container } from '@mui/material';
import { bgBlur } from '../../utils/cssStyles';
import { Team } from './TeamSegment';
import DhanjeetPratapSinghImg from '../../assets/teampics/Dhanjeet Pratap Singh.jpg';
import GayatriVermaImg from '../../assets/teampics/Gayatri Verma.jpg';
import HiteshSahuImg from '../../assets/teampics/Hitesh Sahu.jpg';
import JitendraSinghRathoreImg from '../../assets/teampics/Jitendra Singh Rathore.jpg';
import PratapSinghGaudImg from '../../assets/teampics/Pratap Singh Gaud.jpg';
import SaritaPratapSinghImg from '../../assets/teampics/Sarita Paratap Singh.jpg';
import ShaitanSinghRathoreImg from '../../assets/teampics/Shaitan Singh Rathore.jpg';
import VeenaChaudharyImg from '../../assets/teampics/Veena Chaudhary.jpg';
import HarshvardhanSinghRathoreImg from '../../assets/teampics/Harshvardhan Singh Rathore.jpg';
import AmarSinghImg from '../../assets/teampics/Amar Singh.jpg';
import VijendraSinghChauhanImg from '../../assets/teampics/Vijendra Singh Chauhan.jpg';
import VikramSinghImg from '../../assets/teampics/Vikram Singh.jpg';
import RahulSinghImg from '../../assets/teampics/Rahul Singh.jpg';

const OurTeam = () => {
  const team = {
    advisor: [
      { name: 'Santosh Singh Shekhawat', description: 'GM, The Palace Hotel', location: 'Jaipur' },
      {
        name: 'Harshwardhan Singh Rathore',
        description: 'IT Head MNC',
        location: 'Dubai',
        image: HarshvardhanSinghRathoreImg,
      },
      {
        name: 'Shaitan Singh Rathore',
        description: 'Founder, Saralify German Language Institute',
        location: 'Jaipur',
        image: ShaitanSinghRathoreImg,
      },
      {
        name: 'Jitender Singh Rathore',
        description: 'Foreign Tour Guide & Co-Founder Saralify Geraman Language Institure',
        location: 'Jaipur',
        image: JitendraSinghRathoreImg,
      },
      {
        name: 'Vijendra Singh Chauhan',
        description: 'Builder and Colonizer',
        location: 'Jodhpur',
        image: VijendraSinghChauhanImg,
      },
      { name: 'Vikram Singh', description: 'Sr. Lecturer Gov.', location: 'Jodhpur', image: VikramSinghImg },
      { name: 'Dushyant Singh Rathore', description: 'Branch Manager HDFC', location: 'Jodhpur' },
      { name: 'Surendra Singh Bhayal', description: 'HM Gov. School', location: 'Jodhpur' },
      { name: 'Rahul Singh', description: 'Plastic Procurement Head', location: 'USA', image: RahulSinghImg },
      { name: 'Abhishek Singh', description: 'Founder', location: 'Dubai' },
    ],
    leadership: [
      { name: 'Sarita Pratap Singh', description: 'FOUNDER & CEO', image: SaritaPratapSinghImg },
      { name: 'Pratap Singh Gaud', description: 'OPEARTIONAL HEAD', image: PratapSinghGaudImg },
      { name: 'Dhanjeet Singh', description: 'FINANCE HEAD', image: DhanjeetPratapSinghImg },
    ],
    supporter: [
      { name: 'Amar Singh', description: 'MNC Employee', image: AmarSinghImg },
      { name: 'Hitesh Sahu', description: 'Medical Sector', location: 'Germany', image: HiteshSahuImg },
      { name: 'Veena Chaudhary', description: 'Student', image: VeenaChaudharyImg },
      { name: 'Gyati Verma', description: 'Teacher', image: GayatriVermaImg },
    ],
  };

  return (
    <Container sx={{ textAlign: 'center', mt: 10, ...bgBlur({ color: '#e8f1f2' }) }}>
      <Typography
        textAlign={'center'}
        fontFamily={'Wix Madefor Display'}
        fontSize={20}
        color={'#52B788'}
        fontWeight={600}
      >
        Our Team
      </Typography>

      <Team teamname={'Advisors'} members={team.advisor} />
      <Team teamname={'Active Supporters'} members={team.supporter} />
      <Team teamname={'Leadership'} members={team.leadership} />
    </Container>
  );
};

export default OurTeam;
