import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <GridContainer>
    {projects && projects.map((project) => (
      <BlogCard>
        <Img src={project.image} />
        <TitleContent>{project.title}</TitleContent>
        <TagList>
          {project.tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TagList>
      </BlogCard>
    ))}

  </GridContainer>
);

export default Projects;