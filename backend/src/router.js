const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const Paris = [
  {
    id: 1,
    name: "BEST WESTERN AU TROCADERO",
    adress: "3 avenue Raymond Poincare, 75116 Paris France",
    note: "4 étoiles",
    description:
      "Situé dans une rue arborée du 16e arrondissement, cet hôtel simple se trouve à 1 minute à pied de la station de métro Trocadéro, à 14 minutes de la tour Eiffel et à 2 km de l'Arc de Triomphe.",
    photo_url:
      "https://images.bestwestern.com/bwi/brochures/93261/photos/1024/15587616.jpg",
    link: "https://www.hotelautrocadero.com/",
    distance: "0.800 km",
  },
  {
    id: 2,
    name: "WALDORF TROCADERO HOTEL",
    adress: "12 Bd Malesherbes, 75008 Paris",
    note: "4 étoiles",
    description:
      "Situé à 5 minutes à pied de la station de métro Madeleine, cet hôtel haut de gamme se trouve respectivement à 9 minutes et 10 minutes de marche de la gare Saint-Lazare et de la place de la concorde",
    photo_url:
      "https://ak-d.tripcdn.com/images/220o0u000000j5rnrC623_R_960_660_R5_D.jpg",
    link: "https://www.hotelwaldorftrocadero.com/",
    distance: "1km",
  },
  {
    id: 3,
    name: "CITADINES TOUR EIFFEL PARIS",
    adress: "132 Bd de Grenelle, 75015 Paris",
    note: "4 étoiles",
    description:
      "Cet appart'hôtel contemporain se situe juste en face de la station de métro La Motte-Picquet - Grenelle, à 7 minutes à pied du Champ-de-Mars et à 1,5 km de la tour Eiffel.",
    photo_url:
      "https://cf.bstatic.com/xdata/images/hotel/max500/365801403.jpg?k=d8cfef2ec7e0ee41a97c07f6b210e12710a331a6e351d76cbad3870d3f448b2d&o=&hp=1",
    link: "https://www.booking.com/hotel/fr/citadines-aparthotel-tour-eiffel.fr.html",
    distance: "1km",
  },
  {
    id: 4,
    name: "ADAGIO ACCESS PARIS EIFFEL",
    adress: "14 Rue du Théâtre, 75015 Paris",
    note: "3 étoiles",
    description:
      "Situé près des quais de Seine, à 6 minutes à pied de la station de métro Charles Michels, cet appart'hôtel du 15e arrondissement est installé dans un immeuble moderne doté d'un hall vitré. Il se trouve à 1 km de la tour Eiffel.",
    photo_url: "https://www.ahstatic.com/photos/6790_ho_00_p_1024x768.jpg",
    link: "https://www.adagio-city.com/fr/hotel-6790-aparthotel-adagio-paris-centre-tour-eiffel/index.shtml?utm_source=googleMaps&utm_medium=seoMaps&utm_campaign=seoMaps&y_source=1_MTUzNTkyODctNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
    distance: "1km",
  },
  {
    id: 5,
    name: "HOTEL EIFFEL SAINT CHARLES",
    adress: "37 Rue St Charles, 75015 Paris",
    note: "4 étoiles",
    description:
      "Cet hôtel simple du 15e arrondissement se trouve à 5 minutes de marche de la station de métro Dupleix, à 16 minutes à pied de la tour Eiffel et à 1,7 km des jardins du Trocadéro.",
    photo_url:
      "https://eiffel-saint-charles-hotel-paris.hotelmix.fr/data/Photos/OriginalPhoto/12739/1273936/1273936000/Hotel-Eiffel-Saint-Charles-Paris-Exterior.JPEG",
    link: "https://www.hotel-eiffel-saint-charles.com/fr/",
    distance: "1km",
  },
];

router.get("", (req, res) => {
  res.json(Paris);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
