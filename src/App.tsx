import React from 'react';
import './App.css';
import Start from './components/Start';
import Questionnaire from './components/Questionnaire';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { IGameStatus } from './models/IGameStatus';
import End from './components/End';

const App: React.FC = () => {
  const gameStatus = useSelector((state: RootState) => {
    return state.trivia.gameStatus;
  });
  return (
    <div className="App">
      {gameStatus === IGameStatus.Start && <Start />}
      {gameStatus === IGameStatus.Ongoing && <Questionnaire />}
      {gameStatus === IGameStatus.End && <End />}
    </div>
  );

};

export default App;
