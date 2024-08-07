import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="imgBx" style={{ background: `url(${data.image}) no-repeat center / cover` }}></div>
      <div className="content">
        <div className="pd white">
          <h5>{data.name}</h5>
          <p>{data.description}</p>
          {/* <p>{data.email}</p> */}
          {/* <p>{data.location}, {data.location}</p> */}
          {/* <p>{data.nat}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
