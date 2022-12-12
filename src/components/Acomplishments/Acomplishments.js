import React from 'react';
import { data } from './../../constants/constants'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';



const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Accompolishments</SectionTitle>
    <Boxes>
      {data.map((item) => (
        <Box>
          <BoxNum>{item.number}</BoxNum>
          <BoxText>{item.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
