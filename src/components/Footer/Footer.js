import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkItem>
            Contact - +491785809728
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem href="mailto:snhthakare@gmail.com">
            Email - snhthakare@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          Lets stay connected on the internet
        </CompanyContainer>
        <SocialIcons>
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons>
          <AiFillInstagram />
        </SocialIcons>
        <SocialIcons>
          <AiFillLinkedin />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
