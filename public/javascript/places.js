//$('document').ready(function(){
  // const apiKey = 'AIzaSyDaXpjaqVUhl0MLKeyTqH2ZZIO-9izs96U';
  // const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=${apiKey}`

// const { options } = require("../../models/User");
// var dropDown = document.getElementById('options');
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

        let card = $('<div class="border mt-4" style="max-width: 25rem; margin-left: auto; margin-right: auto; border: 2px solid black !important;">');


        createCard(place, card)
        // Append Place information dynamically

        // $('body').append(card.append(`<div class="container mt-2">${place.name} <br>${place.adr_address}<br><a href="${place.url}" target="_blank">View on Maps</a></div><label for="choices"></label>
        
        // <div class="container mt-2" style="text-align: center">
        //   <select name="choices" id="options">
        //     <option value="disabled" disabled>Choose option...</option>
        //     <option value="mask">Mask Required</option>
        //     <option value="no-mask">No Mask Required</option>
        //     <option value="passport">Proof of Vaccine</option>
        //   </select>
        //   <br>
        //   <button class="btn-warning rounded shadow mb-2" id="save-btn">Save</button>
        // </div>`))

        // fetch(`/api/places/${place.place_id}`, {
        // }).then((resp) => resp.json()).then((data) => {
        //   console.log('mask status from our api', data)
        // })
      }, 300);
    })
  };


  function createCard(place, card){

    $('body').append(card.append(`<div class="container mt-2">${place.name} <br>${place.adr_address}<br><a href="${place.url}" target="_blank">View on Maps</a></div><label for="choices"></label>
        
    <div class="container mt-2" style="text-align: center">
      <select class="choices" id="options">
        <option value="disabled" >Choose option...</option>
        <option value="mask">Mask Required</option>
        <option value="no-mask">No Mask Required</option>
        <option value="passport">Proof of Vaccine</option>
      </select>
      <br>
      <button class="btn-warning rounded shadow mb-2" id="save-btn">Save</button>
    </div>`))

    // fetch(`/api/places/${place.place_id}`, {
    // }).then((resp) => resp.json()).then((data) => {
    //   console.log('mask status from our api', data)
    // })

    placeHolder = place
  }


  document.body.addEventListener("change", function(e){
    e.preventDefault()
    if(e.target.matches("select")){
      verify =e .target.value
    }
  })
  
  document.body.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.matches("button")){

      if(e.target.getAttribute("id") == "save-btn"){
      sendToDB()
  
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




   
  // fetch('/api/users/mask', {
  //   method: 'post',
  //   body: JSON.stringify({
  //     business_id: placeHolder.place_id,
  //     business_name: placeHolder.name,
  //     business_address: placeHolder.adr_address,
  //     business_map_url: placeHolder.url,
  //     mask_selection: verify
  //   }),
  //   headers: { 'Content-Type': 'application/json' }
  // }).then((resp) => resp.json()).then((data) => {
  //     console.log(data)
  //   })


};
