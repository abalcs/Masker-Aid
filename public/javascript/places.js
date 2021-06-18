
// const apiKey = 'AIzaSyDaXpjaqVUhl0MLKeyTqH2ZZIO-9izs96U';
// const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=${apiKey}`

const searchBar = document.getElementById('autocomplete')

// Initialize and add the map
function initAutoComplete() {
  let autocomplete = new google.maps.places.Autocomplete(searchBar)

  // listen for when the input is changed
  searchBar.addEventListener('change', () => {
    setTimeout(() => {
      const place = autocomplete.getPlace();
      console.log('selected place', place);

      fetch(`/api/places/${place.place_id}`, {
      }).then((resp) => resp.json()).then((data) => {
        console.log('mask status from our api', data)
      })
    }, 300);
  })
};


// create table with places
// 