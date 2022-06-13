
import { useState } from 'react';
import AccordionFAQ from './accordionFAQ';


function AboutComponent() {


  var options = [
    {
      question: 'Question1',
      answer:
        'answer1',
    },
    {
      question: 'Question2',
      answer:
        'answer2',
    },


  ];

  return (
    <div className="max-w-[1170px] w-full font-['SourceSansPro'] mx-auto mt-10">
      <h1 className="text-center  p-10 text-2xl font-extrabold">
        {' '}
        Header
      </h1>



      <AccordionFAQ options={options} />
    </div>
  );
}

export default AboutComponent;
