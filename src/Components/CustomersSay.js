// src/Components/CustomersSay.js
import React from 'react';

function CustomersSay() {
  const testimonials = [
    { name: 'John Doe', feedback: 'Amazing food!', rating: 5 },
    { name: 'Jane Smith', feedback: 'Great service!', rating: 4 }
  ];

  return (
    <section id="customers-say">
      <h2>Customer Testimonials</h2>
      <ul>
        {testimonials.map((item, index) => (
          <li key={index}>
            <p>{item.feedback}</p>
            <p>Rating: {item.rating} stars</p>
            <p>- {item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CustomersSay;
