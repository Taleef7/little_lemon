import React, { useState, useEffect } from 'react';

// Define the BookingForm component
const BookingForm = ({ availableTimes, updateAvailableTimes, submitReservation }) => {
  // Define state variables for form inputs
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  // Fetch available times when the date changes
  useEffect(() => {
    if (date) {
      updateAvailableTimes(date);
    }
  }, [date, updateAvailableTimes]);

  // Check form validity
  useEffect(() => {
    const isValid = date && time && guests >= 1 && guests <= 10;
    setIsFormValid(isValid);
  }, [date, time, guests]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const formData = {
        date,
        time,
        guests,
        occasion,
      };
      submitReservation(formData);
    } else {
      alert('Please fill out the form correctly.');
    }
  };

  return (
    <form style={{ display: 'grid', maxWidth: '300px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select time</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <button type="submit" disabled={!isFormValid} aria-label="Submit reservation">
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm;
