import PropTypes from "prop-types";

function Trip({ cityDatas }) {
  return cityDatas.map((cityData) => (
    <li key={cityData.id}>
      <figure className="tripBox">
        <figcaption>{cityData.name}</figcaption>
        <img src={cityData.photo_url} alt={cityData.name} />
        <div className="tripLink">
          <p>Vous êtes à {cityData.distance}</p> <br />
          <p>{cityData.description}</p> <br />
          <a
            href={`${cityData.link_url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservation
          </a>
        </div>
      </figure>
    </li>
  ));
}

Trip.propTypes = {
  cityDatas: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo_url: PropTypes.string,
    distance: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Trip;
