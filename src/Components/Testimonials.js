// Testimonials.js
import "./Testimonials.css";
import TestimonialsCard from "./TestimonialsCard";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=4");
      const data = await response.json();
      const customizedData = data.results.map(user => ({
        ...user,
        customMessage: "The Little Lemon Restaurant is everything i hoped for and more!" // Customize as needed
      }));
      setUsers(customizedData);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="testimonial container py-3 my-3">
      <h2 className="text-center">Testimonials</h2>
      <div className="row justify-content-center align-items-center pd">
        {users.map((person, index) => (
          <TestimonialsCard key={index} data={person} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
