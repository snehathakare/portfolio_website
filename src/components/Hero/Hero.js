import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section>
      <SectionTitle>
        Hello my name is Sneha👋
      </SectionTitle>
      <SectionText>I am a Frontend Developer living in Berlin, Germany. I craft solid and scalable frontend applications with great user experience.
        I build client-side applications with modern features like SPA using modern tech such as React.Js, Next.js, Typescript and CSS frameworks.
      </SectionText>
    </Section>
);

export default Hero;