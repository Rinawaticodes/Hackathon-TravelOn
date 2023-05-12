import PropTypes from "prop-types";

function Card({ cityDatas }) {
  return cityDatas.map((cityData) => (
    <li key={cityData.id} className="citydata-item">
      <figure className="card">
        <div className="cardHeader">
          <figcaption>{cityData.name}</figcaption>
          <img
            src={cityData.photo_url}
            alt={cityData.name}
            className="cardImage"
          />
        </div>
        <div className="cardBody">
          <p>Vous etes à {cityData.distance} </p> <br />
          <p>{cityData.description}</p> <br />
          <button type="button">Reservation</button>
        </div>
      </figure>
    </li>
  ));
}

Card.propTypes = {
  cityDatas: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo_url: PropTypes.string,
    distance: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Card;
