import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="tech">
    <SectionTitle>Recent projects</SectionTitle>
    <GridContainer>
      {projects && projects.map((project) => (
        <BlogCard>
          <Img src={project.image} />
          <HeaderThree>{project.title}</HeaderThree>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TagList>
              {project.tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </TagList>
          </div>

        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;