let markers, map
// Initialize and add the map
function initMap() {
    const posicion = {
        lat: -25.344, 
        lng: 131.031
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    })

    markers.push(
        new google.maps.Marker({
            posicion: {
                lat: 11.3270989,
                lng: -74.0843038
            },
            map,
            title: "Tayrona"
        })
    )

    markers.push(
        new google.maps.Marker({
            posicion: {
                lat: 55.7534063,
                lng: 37.6192392
            },
            map,
            title: "Plaza Roja"
        })
    )

    markers.push(
        new google.maps.Marker({
            posicion: {
                lat: -8.727807,
                lng: 115.5444231
            },
            map,
            title: "Bali"
        })
    )
}
