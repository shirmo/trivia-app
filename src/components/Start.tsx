import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../store/triviaSlice';

const Start: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = (e: any) => {
    dispatch(startGame());
  };
  return (
    <header className='start'>
      <h1>Welcome to Shir Molina's Triviapp</h1>
      <button onClick={onClick}>Click to start</button>
    </header>
  );
};

export default Start;
