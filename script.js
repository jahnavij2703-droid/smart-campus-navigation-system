var map = L.map('map').setView([17.35296, 78.50914
], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

const places = [

  {
    name: "Library",
    coords: [17.35437, 78.50819
]
  },

  {
    name: "Canteen",
    coords: [17.35376, 78.50944
]
  },

  {
    name: "Auditorium",
    coords: [17.35307, 78.50936
]
  },

  {
    name: "Hostel",
    coords: [17.35253, 78.50856
]
  }

];

places.forEach(place => {

  L.marker(place.coords)
    .addTo(map)
    .bindPopup(place.name);

});

function searchPlace(){

  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const foundPlace = places.find(place =>
    place.name.toLowerCase() === input
  );

  if(foundPlace){

    map.setView(foundPlace.coords, 18);

    L.popup()
      .setLatLng(foundPlace.coords)
      .setContent(foundPlace.name)
      .openOn(map);

  }

  else{

    alert("Place not found");

  }

}
L.Routing.control({

  waypoints: [

    L.latLng(
      places[0].coords[0],
      places[0].coords[1]
    ),

    L.latLng(
      places[1].coords[0],
      places[1].coords[1]
    )

],

  lineOptions: {

    styles: [
      {
        color: 'blue',
        weight: 6
      }
    ]

  },

  routeWhileDragging: true,

}).addTo(map);