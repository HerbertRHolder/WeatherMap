(function(){

    mapboxgl.accessToken = MAPBOX_TOKEN;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });

    var marker = new mapboxgl.Marker()
    .setLngLat([-98.4916, 29.4252])
    .addTo(map)

    var popup = new mapboxgl.Popup()
    // .setLngLat([-98.489615, 29.426827])
    // .setHTML("<p>Codeup Rocks!</p>")
    // .addTo(map)


    // var alamoPopup = new mapboxgl.Popup()
    // .setHTML("<p>Remember The Alamo!</p>")
    marker.setPopup(popup);

    geocode("908 Audelia Rd, Richardson, TX 75081", MAPBOX_TOKEN).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(15);
        let mark = new mapboxgl.Marker()
        .setLngLat(result)
        .addTo(map);
        let popup = new mapboxgl.Popup().setHTML("<p>Rocco's Pizza</p>");
        mark.setPopup(popup);

    });

    reverseGeocode([-98.4916, 29.4252], MAPBOX_TOKEN).then(function(results){
        // console.log("results: ",results);
        map.setCenter();
    });






    $(document).ready(function () {
        
    
    
    
    
    
    
    
    
    
    
    
    }); // ready
})(); // IFFE