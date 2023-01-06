import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import { Section } from '../../styles/GlobalComponents'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Section>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            <DiCode size="4rem" />
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink href="https://drive.google.com/file/d/10vUAIvXtrdNgQhywdViHCQ3pFHt8o159/view?usp=sharing" target="_blank">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink href="https://medium.com/@snhthakare" target="_blank">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink href="/articles">
            My story
          </NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons>
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons>
          <AiFillInstagram />
        </SocialIcons>
        <SocialIcons>
          <AiFillLinkedin />
        </SocialIcons>
      </Div3>
    </Container>
  </Section>

);

export default Header;
