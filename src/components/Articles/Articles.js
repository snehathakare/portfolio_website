import React from 'react';
import { articles } from './../../constants/constants'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Box, Boxes, BoxNum, BoxText } from './ArticlesStyles';

const Articles = (props) => (
    <Section>
      <SectionTitle>
       My blog articles👋
      </SectionTitle>
      <Boxes>
      {articles.map((item) => (
        <Box>
          <BoxText>{item.src}</BoxText>
        </Box>
      ))}
    </Boxes>
    </Section>
);

export default Articles;