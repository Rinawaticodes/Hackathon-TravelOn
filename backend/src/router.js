const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const hotelList = [
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
  {
    id: 6,
    name: "INN AT THE ROMAN FORUM, THE",
    geoCode: {
      latitude: 41.89153,
      longitude: 12.49525,
    },
    address: "Via degli Ibernesi, 30, 00184 Roma RM, Italy",
    distance: "0,3km",

    note: "5 étoiles",
    description:
      "Situé au cœur de la Rome antique, l'établissement The Inn At The Roman Forum-Small Luxury Hotels se trouve à quelques pas du Colisée et du Forum romain. Il possède même des ruines. Une connexion Wi-Fi est disponible gratuitement dans toutes ses installations.",
    photo_url:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/33743807.jpg?k=41d2e5c74c30cc088c67b448f5431c433057bcc6500cf5dc8997906427ebde7f&o=&hp=1",
    link_url:
      "https://www.theinnattheromanforum.com/en/?utm_source=google&utm_medium=cpc&utm_campaign=brand_en&utm_content=Suite",
  },
  {
    id: 7,
    name: "MERCURE ROMA CENTRO COLOSSEO 4*",
    geoCode: {
      latitude: 41.89,
      longitude: 12.49812,
    },
    address: "Via Labicana, 144, 00184 Roma RM, Italy",
    distance: "0,5 km",
    note: "4 étoiles",
    description:
      "Doté d'un toit-terrasse et d'une piscine ouverte en saison avec vue sur le Colisée, le Mercure Roma Centro Colosseo propose des chambres modernes et une connexion Wi-Fi gratuite dans l'ensemble des locaux. Le Colisée est à 400 mètres.",
    photo_url:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/251857500.jpg?k=a6b15984374661386e11f956713f4d080cc25c64e11662efe42e1b17b27c69ed&o=&hp=1",
    link_url: "https://all.accor.com/hotel/2909/index.fr.shtml",
  },
  {
    id: 8,
    name: "BETTOJA HOTEL MASSIMO D'AZEGLIO",
    geoCode: {
      latitude: 41.89459,
      longitude: 12.49284,
    },
    address: "Via Cavour, 18, 00185 Roma RM, Italy",
    distance: "0,5 km",
    note: "4 étoiles",
    description:
      "Datant de 1875, le Bettoja Hotel Massimo d’Azeglio vous accueille dans un élégant bâtiment situé à seulement 100 mètres de la gare de Rome-Termini et à 15 minutes à pied du Colisée. Cet établissement propose un restaurant et une cave à vin.",
    photo_url:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/260360733.jpg?k=5e9fc43973cc42f9491cceb5982d624539331736e1f26d738bd4183bffc2cb9a&o=&hp=1",
    link_url: "https://www.romehoteldazeglio.it/fr",
  },
  {
    id: 9,
    name: "HOTEL CAPO DAFRICA",
    geoCode: {
      latitude: 41.88829,
      longitude: 12.49767,
    },
    address: "Via Capo d'Africa, 54, 00184 Roma RM, Italy",
    distance: "0,5 km",
    note: "4 étoiles",
    description:
      "Entouré de trattorias traditionnelles et de bars à vins, l'Hotel Capo d'Africa est un luxueux établissement situé à seulement 5 minutes à pied du Colisée. Il propose le petit-déjeuner, mais aussi des boissons et des collations, que vous pourrez déguster sur le toit-terrasse.",
    photo:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/36075805.jpg?k=179f6593ce0aee24ef15e130bbd28e7ae497d5f1d422d977b99cd1463eeaed5d&o=&hp=1",
    link_url: "https://www.hotelcapodafrica.com/fr/",
  },
  {
    id: 0,
    name: "HOTEL PALAZZO MANFREDI",
    geoCode: {
      latitude: 41.88973,
      longitude: 12.499,
    },
    address: "Via Labicana, 125, 00184 Roma RM, Italy",
    distance: "0,6 km",
    note: "5 étoiles",
    description:
      "L’Hotel Palazzo Manfredi – Relais & Chateaux dispose d’un toit-terrasse où vous pourrez savourer un petit-déjeuner tout en profitant de la vue imprenable sur le Colisée. Les hébergements spacieux incluent une connexion Wi-Fi gratuite et une télévision avec les chaînes du bouquet Sky.",
    photo_url:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/210106720.jpg?k=694833d09157f72e0d3421212700c40a247d4d5844bcb3ec050d910bc941d061&o=&hp=1",
    link_url: "https://www.manfredihotels.com/fr/palazzo-manfredi/",
  },
];

router.get("/", (req, res) => {
  res.json(hotelList);
});
router.get("/", (req, res) => {
  res.json([]);
});
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
