import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <LeftSection>
    <Section>
      <SectionTitle>Welcome to <br />My Personal Portfolio</SectionTitle>
      <SectionText>
        Frontend Developer. Born in India. Based in Berlin. Fuelled by Chai tea.
      </SectionText>
      <Button>Learn more</Button>
    </Section>
  </LeftSection>
);

export default Hero;