// src/Components/Specials.js
import React from 'react';

function Specials() {
  const specials = [
    { name: 'Pasta Primavera', description: 'Fresh vegetables and pasta.', price: '$12.99' },
    { name: 'Margherita Pizza', description: 'Classic pizza with fresh tomatoes and basil.', price: '$10.99' }
  ];

  return (
    <section id="specials">
      <h2>Weekly Specials</h2>
      <ul>
        {specials.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Specials;
