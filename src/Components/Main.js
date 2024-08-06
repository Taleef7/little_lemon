import React, { useReducer, useCallback } from 'react';
import BookingForm from './BookingForm';

// Define initial state for available times
const initialTimes = [];

// Reducer function to manage times state
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

// Main component
const Main = () => {
  // Use reducer to manage available times
  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

  // Function to initialize times
  const initializeTimes = useCallback(async () => {
    const times = await fetchAPI(new Date().toISOString().split('T')[0]);
    dispatch({ type: 'SET_TIMES', payload: times });
  }, []);

  // Function to update times based on selected date
  const updateAvailableTimes = useCallback(async (date) => {
    const times = await fetchAPI(date);
    dispatch({ type: 'SET_TIMES', payload: times });
  }, []);

  // Function to submit reservation
  const submitReservation = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      alert('Reservation successful!');
    } else {
      alert('Reservation failed. Please try again.');
    }
  };

  // Initialize times on component mount
  useEffect(() => {
    initializeTimes();
  }, [initializeTimes]);

  return (
    <div>
      {/* Other content */}
      <BookingForm
        availableTimes={availableTimes}
        updateAvailableTimes={updateAvailableTimes}
        submitReservation={submitReservation}
      />
    </div>
  );
};

export default Main;
