import React from 'react';
import { skills } from '../../constants/constants'
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Boxes, Box, Image, BoxNum, BoxText } from './SkillsStyles';

const Skills = () => (
  <Section>
    <SectionTitle>
      Tech I use👋
    </SectionTitle>
    <Boxes>
      {skills.map((item) => (
        <div>
          <Image src={item.logo} />
          <BoxNum>{item.title}</BoxNum>
        </div>
      ))}
    </Boxes>
  </Section>
);

export default Skills;