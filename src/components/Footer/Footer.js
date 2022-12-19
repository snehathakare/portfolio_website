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
            Let's stay connected
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem>
            snhthakare@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkItem>
        <SocialIcons>
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons>
          <AiFillInstagram />
        </SocialIcons>
        <SocialIcons>
          <AiFillLinkedin />
        </SocialIcons>
        </LinkItem>
        </LinkColumn>
      </LinkList>
    
        
      
    </FooterWrapper>
  );
};

export default Footer;
