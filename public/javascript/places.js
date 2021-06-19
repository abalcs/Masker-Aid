
// const apiKey = 'AIzaSyDaXpjaqVUhl0MLKeyTqH2ZZIO-9izs96U';
// const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=${apiKey}`

const searchBar = document.getElementById('autocomplete')
const body = $('<body>');

// Initialize and add the map
function initAutoComplete() {
  let autocomplete = new google.maps.places.Autocomplete(searchBar)

  // listen for when the input is changed
  searchBar.addEventListener('change', () => {
    setTimeout(() => {
      const place = autocomplete.getPlace();
      console.log('selected place', place);

      let card = $('<div class="border mt-4" style="max-width: 25rem; margin-left: auto; margin-right: auto; border: 2px solid black !important;">');

      // Append Place information dynamically

      $('body').append(card.append(`<div class="container mt-2">${place.name} <br>${place.adr_address}<br><a href="${place.url}">View on Maps</a></div><label for="choices"></label>
      
      <div class="container mt-2" style="text-align: center">
        <select name="choices" id="options">
          <option value="mask">Mask Required</option>
          <option value="no-mask">No Mask Required</option>
          <option value="passport">Proof of Vaccine</option>
        </select>
        <br>
        <button class="btn-warning rounded shadow mb-2" id="save-btn">Save</button>
      </div>`))

      fetch(`/api/places/${place.place_id}`, {
      }).then((resp) => resp.json()).then((data) => {
        console.log('mask status from our api', data)
      })
    }, 300);
  })
};
