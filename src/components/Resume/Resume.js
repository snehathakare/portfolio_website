import React from 'react';
import { data } from './../../constants/constants'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Boxes, Box, Image, BoxNum, BoxText } from './ResumeStyles';

const Resume = (props) => (
  <Section>
    <SectionTitle>
      Tech I use👋
    </SectionTitle>
    <Boxes>
      {data.map((item) => (
        <Box>
          <BoxText><Image src={item.logo} /></BoxText>
          <BoxNum>{item.title}</BoxNum>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Resume;