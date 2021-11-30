import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { moveToNextPage, moveToPrevPage, endGame } from '../store/triviaSlice';
import Question from './Question';


const Questionnaire: React.FC = () => {
  const dispatch = useDispatch();

  const currentQuestion = useSelector((state: RootState) => {
    return state.trivia.questionIndex;
  });

  const lastQuestionIndex = useSelector((state: RootState) => {
    return state.trivia.data.length - 1;
  });
  let prev = false;
  let next = false;
  if (currentQuestion === 0) {
    prev = true;
  } else if (currentQuestion === lastQuestionIndex) {
    next = true;
  }

  const onNextClick = (e: any) => {
    dispatch(moveToNextPage());
  };

  const onPrevClick = (e: any) => {
    dispatch(moveToPrevPage());
  };

  const onSubmit = (e: any) => {
    dispatch(endGame());
  }

  return (
    <div>
      <Question />
      <button onClick={onPrevClick} disabled={prev}>
        Prev
      </button>
      <button onClick={onNextClick} disabled={next}>
        Next
      </button>
      <div>
      <button onClick={onSubmit}>
        Submit
      </button>
      </div>
    </div>
  );
};


export default Questionnaire;

