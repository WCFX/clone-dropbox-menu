import React from 'react';
import GlobalStyles from './config/GlobalStyles';
import { Section } from './components/Section';

import data from './data';

function App() {
  return (
    <>
      <Section 
        variant="blue"
        title1={data[0].title1}
        title2={data[0].title2}
        description1={data[0].title1}
      />

      <Section 
        variant="beige"
        title1={data[1].title1}
        description1={data[1].description1}
      />

      <Section 
        variant="blue"
        title1={data[2].title1}
        title2={data[2].title2}
        subtitle1={data[2].subtitle1}
        subtitle2={data[2].subtitle2}
        subtitle3={data[2].subtitle3}
        description1={data[2].description1}
        description2={data[2].description2}
        description3={data[2].description3}
      />

      <Section 
        variant="white"
        title1={data[3].title1}
        subtitle1={data[3].subtitle1}
        subtitle2={data[3].subtitle2}
      />

      <Section 
        variant="black"
        title1={data[4].title1}
      />
      <Section 
        variant="black"
        title1={data[5].title1}
      />
      <Section 
        variant="black"
        title1={data[6].title1}
      />
      <Section 
        variant="black"
        title1={data[7].title1}
      />
      <Section 
        variant="black"
        title1={data[8].title1}
      />


      <GlobalStyles />
    </>
  );
}

export default App;
