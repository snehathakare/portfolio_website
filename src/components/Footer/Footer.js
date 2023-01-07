import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkItem>
            <LinkTitle>
              Let's stay connected
            </LinkTitle>
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem>
            Although I’m not looking for any new opportunities currently, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem>
            snhthakare@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem>
            <SocialIcons href="https://github.com/snehathakare" target="_blank">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/finding_snehu/" target="_blank">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/snehathakare/" target="_blank">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
