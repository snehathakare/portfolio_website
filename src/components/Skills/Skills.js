import React from 'react';
import { skills } from '../../constants/constants'
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Boxes, Image, BoxText } from './SkillsStyles';

const Skills = () => (
  <Section>
    <SectionTitle>
      Tech I use👋
    </SectionTitle>
    <Boxes>
      {skills.map((item) => (
        <div>
          <Image src={item.logo} />
          <BoxText>{item.title}</BoxText>
        </div>
      ))}
    </Boxes>
  </Section>
);

export default Skills;