import React from 'react';

import { Container, Content } from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title1: string;
  title2?: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  description1?: string;
  description2?: string;
  description3?: string;
}

export const Section: React.FC<Props>= ({
  variant,
  title1,
  title2,
  subtitle1,
  subtitle2,
  subtitle3,
  description1,
  description2,
  description3
 }) => {
  return(
    <Container className={variant}>
      <Content>
        <h2>{title1}</h2>
        <h2>{title2}</h2>
      </Content>
        <h3>{subtitle1}</h3>
        <h3>{subtitle2}</h3>
        <h3>{subtitle3}</h3>
        <p>{description1}</p>
        <p>{description2}</p>
        <p>{description3}</p>
    </Container>
  )
};

