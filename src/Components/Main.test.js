import { initializeTimes } from './Main'; // Adjust import if needed
import { render, screen } from "@testing-library/react";
import { timesReducer } from './Main'; // Adjust import if needed

test('initializeTimes returns correct initial times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const result = initializeTimes();

  expect(result).toEqual(expectedTimes);
});


test('updateTimes should return the same available times', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_TIMES' };

  const result = timesReducer(initialState, action);

  expect(result).toEqual(initialState);
});

