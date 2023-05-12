import PropTypes from "prop-types";

function Hotel({ cityDatas }) {
  return cityDatas.map((cityData) => (
    <li key={cityData.id}>
      <figure className="tripBox">
        <figcaption>{cityData.name}</figcaption>
        <img src={cityData.photo_url} alt={cityData.name} />
        <div>
          <p>Vous ète à {cityData.distance}</p> <br />
          <p>{cityData.description}</p> <br />
          <button type="button">Reservation</button>
        </div>
      </figure>
    </li>
  ));
}

Hotel.propTypes = {
  cityDatas: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo_url: PropTypes.string,
    distance: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Hotel;
