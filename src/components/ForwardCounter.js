// import {  } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-countrer';



const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
