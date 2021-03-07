import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 10px;
  background: linear-gradient(180deg, rgba(215,215,215,1) 100%, rgba(190,190,190,1) 100%);
  @media (min-width: 900px) {
    padding: 20px 40px;
  }
`;

export const FooterLink = styled.span`
  color: #555555;
  svg {
    display: inline;
    width: 1.6em;
    height: 1.6em;
    vertical-align: bottom;
  }
  a {
    color: #333333;
    text-decoration: none;
    font-weight: bold;
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in-out;
    }
  }
`;

interface FProps {
  children: React.ReactNode
}

export default function Footer({ children, ...restProps }: FProps) {
  return <Wrapper {...restProps}>
    {children}
  </Wrapper>;
}
