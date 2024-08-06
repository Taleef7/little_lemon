import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);

  // Assuming you have a heading or label like this in BookingForm
  const dateLabelElement = screen.getByText("Choose date");

  // Verify that the element is present in the document
  expect(dateLabelElement).toBeInTheDocument();
});
