import PropTypes from "prop-types";

function Card({ hotel }) {
  return (
    <figure className="card">
      <div className="cardHeader">
        <figcaption>{hotel.name}</figcaption>
        <img src={hotel.photo_url} alt={hotel.name} className="card" />
      </div>
      <div className="cardBody">
        <p>
          Vous ètes à {hotel.distance} de afiche le input
          <p>{hotel.description}</p>
        </p>
        <button type="button">Reservation</button>
      </div>
    </figure>
  );
}

Card.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo_url: PropTypes.string,
    distance: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
