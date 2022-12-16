import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <LeftSection>
    <Section>
      <SectionTitle>
        Hello my name is Sneha👋
      </SectionTitle>
      <SectionText>I am a Frontend Developer living in Berlin, Germany. I craft solid and scalable frontend applications with great user experience.</SectionText>
      <SectionText>Got any questions?</SectionText>
      <Button>Contact me</Button>
    </Section>
  </LeftSection>
);

export default Hero;