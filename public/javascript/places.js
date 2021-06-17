
// const apiKey = 'AIzaSyDaXpjaqVUhl0MLKeyTqH2ZZIO-9izs96U';
// const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=${apiKey}`

const maskIcon = 'img/face-mask.png'
const iconSelection = document.getElementById('choices');


// Initialize and add the map
function initMap() {
    // Create variable for NH lon & lat
    const lowell = { lat: 42.6334, lng: -71.3162 };
    // Sets default to zoom in on NH
    let options = {
      zoom: 9,
      center: lowell,
    }
    // Creates a new map that is centered on NH
    let map = new google.maps.Map(document.getElementById('map'), options);


    map.addListener("click", (e) => {
      if (iconSelection.value == 1){placeMaskMarker(e.latLng, map)}
      else if (iconSelection.value == 2){placeNoMaskMarker(e.latLng, map)}
      else if(iconSelection.value == 3) {placePassportMarker(e.latLng, map)}
    });
    
    function placePassportMarker(location) {
      var marker = new google.maps.Marker({
          position: location, 
          map: map,
          icon: '/img/driver-license.png'
      })
      google.maps.event.addListener(marker, 'dblclick', function(event) {
        marker.setMap(null);
    });
    };

    function placeMaskMarker(location) {
      var marker = new google.maps.Marker({
          position: location, 
          map: map,
          icon: '/img/patient.png'
      })
      google.maps.event.addListener(marker, 'dblclick', function(event) {
        marker.setMap(null);
    });
    };
    function placeNoMaskMarker(location) {
      var marker = new google.maps.Marker({
          position: location, 
          map: map,
          icon: '/img/no-mask.png'
      })
      google.maps.event.addListener(marker, 'dblclick', function(event) {
        marker.setMap(null);
    });
    }
};