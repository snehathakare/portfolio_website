import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked on many technologies from frontend to backend</SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>Experience with <br /></ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>Experience with <br /></ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>Experience with <br /></ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
