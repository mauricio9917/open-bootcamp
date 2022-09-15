// Initialize and add the map
function initMap() {
    const uluru = { lat: -25.344, lng: 131.031 }
    const tayrona = {lat: 11.3270989,lng: -74.0843038}
    const redSquare = {lat: 55.7534063, lng: 37.6192392}
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {uluru, tayrona, redSquare}
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: (uluru,tayrona,redSquare),
      map: map,
    });
  }
  
  window.initMap = initMap;