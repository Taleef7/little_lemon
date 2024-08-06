import React, { useReducer, useState } from 'react';
import BookingPage from './BookingPage';

// Initial state for available times
const initializeTimes = () => [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

// Reducer function to update available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, we'll return the same times regardless of the date
      return initializeTimes();
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  // Function to update available times based on selected date
  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES' });
  };

  return (
    <BookingPage
      availableTimes={availableTimes}
      updateTimes={updateTimes}
    />
  );
};

export default Main;
