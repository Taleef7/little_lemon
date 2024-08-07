const ConfirmRes = ({ conf }) => {
  const render = conf;
  return (
    <>
      <section className="container my-3">
        <h2>Reservation Confirmed!</h2>
        <div className="container row pd my-6" style={{ width: "80%", margin: "auto auto", background: "#fdfdfd", borderRadius: "25px" }}>
          <h6>{`${render.line1}`}</h6>
          <h6>{`${render.line2}`}</h6>
          <h6>{`${render.line3}`}</h6>
        </div>
      </section>
    </>
  );
};

ConfirmRes.propTypes = {};

export default ConfirmRes;
