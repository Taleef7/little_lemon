// TestimonialsCard.js
import "./TestimonialsCard.css";

const TestimonialsCard = ({ data }) => {
  return (
    <div className="col-25 col-50 col light">
      <div className="center mt-3">
        <img className="test-img" src={data.picture.large} alt={`${data.name.first} ${data.name.last}`} />
      </div>
      <h5 className="center my-2">{data.name.first} {data.name.last}</h5>
      <p className="pd">
        &quot;{data.customMessage}&quot;
      </p>
    </div>
  );
};

export default TestimonialsCard;
