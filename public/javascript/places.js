  const searchBar = document.getElementById('autocomplete')
  const body = $('<body>');
  var verify ="mask";

  var placeHolder;

  // Initialize and add the map
  function initAutoComplete() {
    let autocomplete = new google.maps.places.Autocomplete(searchBar)

    // listen for when the input is changed
    searchBar.addEventListener('change', () => {
      setTimeout(() => {
        const place = autocomplete.getPlace();
        console.log('selected place', place);

        let card = $('<div class="container" style="width: 28rem; max-height: 15rem; margin-left: 9.5%; margin-top: -750px; border: 2px solid black !important;"</div>');


        createCard(place, card)
      }, 300);
    })
  };


  function createCard(place, card){

    $('body').append(card.append(`<div class="container">${place.name} <br>${place.adr_address}<br><a href="${place.url}" target="_blank">View on Maps</a></div><label for="choices"></label>
        
    <div class="container" style="text-align: center; margin-top: -25%;">
      <select class="choices" id="options">
        <option value="disabled" >Choose option...</option>
        <option value="mask">Mask Required</option>
        <option value="no-mask">No Mask Required</option>
        <option value="passport">Proof of Vaccine</option>
      </select>
      <br>
      <button class="btn-warning rounded shadow mb-2" id="save-btn">Save</button>
    </div>`))

    placeHolder = place
  }


  document.body.addEventListener("change", function(e){
    e.preventDefault()
    if(e.target.matches("select")){
      verify = e.target.value
    }
  })
  
  document.body.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.matches("button")){

      if(e.target.getAttribute("id") == "save-btn"){
      sendToDB()
      alert('Thanks for sharing!')
      } 
    }
  })

  async function sendToDB(){

 console.log("STEP 1")
    console.log(placeHolder)
    console.log(verify)


    const response = await fetch('/api/place/mask', {
      method: 'post',
      body: JSON.stringify({
        business_id: placeHolder.place_id,
        business_name: placeHolder.name,
        business_address: placeHolder.adr_address,
        business_map_url: placeHolder.url,
        mask_selection: verify
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    console.log(response)
    retrieveFromDB();
};

function retrieveFromDB() {
  fetch('/api/place/mask', {
    method: 'get',
      
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    return response.json();
  }).then(places => {
    console.log(places)

    $('#recents').html("")
    const header1 = $('<p>').css({"text-decoration": "underline", "font-weight": "bold"}).text('Location')
    const header2 = $('<p>').css({"text-decoration": "underline", "font-weight": "bold"}).text('Address')
    const header3 = $('<p>').css({"text-decoration": "underline", "font-weight": "bold"}).text('Mask Status')
    $('#recents').append(header1)
    $('#recents').append(header2)
    $('#recents').append(header3)

    for(let i = 0; i < places.length; i++) {
      const place = places[i];
      const name = place.business_name
      const address = place.business_address
      const mask = place.mask_selection

      const column1 = $('<div style="text-align: left;">').text(name)
      const column2 = $('<div style="text-align: left">').text('')
      const column3 = $('<div style="text-align: left; border-bottom: 2px solid black;">').text(mask)

      $('#recents').append(column1)
      $('#recents').append(column2)
      $('#recents').append(column3)
    }
  })
}

retrieveFromDB();


