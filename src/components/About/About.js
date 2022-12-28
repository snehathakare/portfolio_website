import React from 'react';
import { articles } from './../../constants/constants'
import { Section, SectionText, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Box, Boxes, Img, AboutText, BoxImg, BoxImgContainer } from './AboutStyles';

const About = (props) => (
    <Section>
      <SectionTitle>
        My story
      </SectionTitle>
     <AboutText>
        <Img src="/images/Sneha.jpeg"/>
        <SectionSubText>
            After graduating in 2012 with a Bachelor’s Degree in Computer Engineering (First Class with Distinction) from the University of Mumbai, I spent my years working both as a freelance web developer and an employee and as part of a team in various companies across Asia, Europe, and the US. I acquired various technical and soft skills, as well as the ability to communicate with team members and clients while effectively meeting milestones and deadlines.
            I have worked on a multitude of web based projects for a range of clients Ecommerce, Manufacturing, Power Generation domains.
            I am currently working in Berlin .These days I enjoy spending my free time riding my bike, cooking and reading.
        </SectionSubText>
     </AboutText>
     <BoxImgContainer>
      <Boxes>
        {articles.map((item) => (
          <Box>
            <BoxImg src={item.src} />
          </Box>
        ))}
      </Boxes>
     </BoxImgContainer>
    </Section>
);

export default About;