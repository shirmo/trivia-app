import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICheckedAnswer from '../models/ICheckedAnswer';
import { IGameStatus } from '../models/IGameStatus';

export const triviaSlice = createSlice({
  name: 'Trivia',
  initialState: {
    gameStatus: IGameStatus.Start,
    data: [
      {
        id: 0,
        question: 'What is the rarest M&M color?',
        answers: ['Orange', 'Yellow', 'Blue', 'Brown'],
        correct: 3,
      },
      {
        id: 1,
        question: 'What is "Cynophobia"?',
        answers: [
          'A famous cocktail',
          'Fear of dogs',
          'A type of instrument',
          'Physical phenomenon',
        ],
        correct: 1,
      },
      {
        id: 2,
        question:
          'What was the first feature-length animated movie ever released?',
        answers: ['Pinocchio', 'Snow White', 'Bambi', 'Fantaia'],
        correct: 1,
      },
      {
        id: 3,
        question: 'Who invented the word "Vomit"?',
        answers: [
          'Albert Einstein',
          'Oscar Wilde',
          'William Shakespeare',
          'Ernest Hemingway',
        ],
        correct: 2,
      },
    ],
    questionIndex: -1,
    userAnswers: new Array<ICheckedAnswer>(),
  },
  reducers: {
    startGame: (state) => {
      state.gameStatus = IGameStatus.Ongoing;
      state.questionIndex = 0;
      state.userAnswers = new Array<ICheckedAnswer>();
    },

    endGame: (state) => {
      state.gameStatus = IGameStatus.End;
      state.questionIndex = state.userAnswers.length;
    },

    moveToNextPage: (state) => {
      console.log(state.data.length - 1);
      if (state.questionIndex === state.data.length - 1) {
        state.gameStatus = IGameStatus.End;
      } else {
        state.questionIndex++;
      }
    },

    moveToPrevPage: (state) => {
      if (state.questionIndex > 0) {
        state.questionIndex--;
      }
    },

    startOver: (state) => {
      state.gameStatus = IGameStatus.Start;
      state.questionIndex = -1;
      state.userAnswers = new Array<ICheckedAnswer>();
    },

    updateChosenAnswer: (state, action: PayloadAction<ICheckedAnswer>) => {
      let toRevise = false;
      let indexToRevise = -1;
      state.userAnswers.map((answer, index) => {
        if (answer.questionId === action.payload.questionId) {
          toRevise = true;
          indexToRevise = index;
          
        }
        return answer;
      });
      if (toRevise) {
        state.userAnswers[indexToRevise] = action.payload;
      } else {
        state.userAnswers.push(action.payload);
      }
    },
  },
});

export const {
  startGame,
  endGame,
  moveToNextPage,
  moveToPrevPage,
  startOver,
  updateChosenAnswer,
} = triviaSlice.actions;

export default triviaSlice.reducer;
