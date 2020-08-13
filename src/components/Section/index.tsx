import React from 'react';

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
    <h1>Olá</h1>
  )
};

