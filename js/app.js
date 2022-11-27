
mapboxgl.accessToken = MAPBOX_TOKEN;
let form = document.getElementById("search");

// TODO Need to refactor geocode to an jquery ajax get function

let time =  Array.from(document.getElementsByClassName("card-header"))  
let degrees =  Array.from(document.getElementsByClassName("deg-insert")) 
let img =  Array.from(document.getElementsByClassName("img-insert")) 
let description =  Array.from(document.getElementsByClassName("description"));
let humidity =  Array.from(document.getElementsByClassName("humidity"));
let wind =  Array.from(document.getElementsByClassName("wind"));
let pressure =  Array.from(document.getElementsByClassName("pressure"));

// Creates an instant of a map
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-96.83354127342504, 32.79280501319449]
});
// creates an instant of the marker object
let marker = new mapboxgl.Marker({ draggable: true })
    .setLngLat([-96.83354127342504, 32.79280501319449])
    .addTo(map)


// starter weather
coordinatesToWeather( marker.getLngLat().lng.toString() , marker.getLngLat().lat.toString());



function coordinatesToWeather(long, lat){
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHER_TOKEN,
        lon: long,
        lat: lat,
        units: "imperial"
    }).done(function (data) {
        //.map
        // $(".deg-insert").html(parseInt(data.main.temp) + "˚");
        console.log("data: ",data.list);
       for (let i = 0;i < degrees.length;i++){
        time[i].innerHTML = `<h2>${data.list[i].dt_txt}</h2>`
        degrees[i].innerHTML = `${data.list[i].main.temp}˚F / ${data.list[i].main.temp_max}˚F `
        img[i].innerHTML = `icon: ${data.list[i].weather[0].icon}`
        description[i].innerHTML  = `Description: ${data.list[i].weather[0].description}`
        wind[i].innerHTML = `Wind: ${data.list[i].wind.speed} mph`
        humidity[i].innerHTML = `Humidity: ${data.list[i].main.humidity}`
        pressure[i].innerHTML = `Pressure: ${data.list[i].main.pressure}`
       }
        
        // degrees.map(deg => deg.innerHTML = data.list[deg]);
    });
}



// On Drag This function gives the user the weather based 
// on the marker longitude and latitude
function onDragEnd() {
    const lngLat = marker.getLngLat();
    let long = lngLat.lng.toString();
    let lat = lngLat.lat.toString();
    coordinatesToWeather(long,lat);

}



function namesToWeather(event) {
    event.preventDefault();
    // get target input string
    let input = event.target[0].value;

    // Ajax function in mapbox-geocoder-utils
    geocode(input, MAPBOX_TOKEN).then(function (result) {
        console.log({ result });
        
        map.setCenter(result);
        // map.zoomIn(result);
        map.setZoom(15);
        let mark = new mapboxgl.Marker({ draggable: true })
            .setLngLat(result)
            .addTo(map);
    });// geocode end

    $.get("http://api.openweathermap.org/data/2.5/weather", {

        APPID: WEATHER_TOKEN,
        q: `${input}`,
        units: "imperial"

    }).done(function (data) {

        $(".deg-insert").html(parseInt(data.main.temp) + "˚");
        console.log('Done data: ', data);
        data;

    });








}

// adds a drag event on this marker object
marker.on('dragend', onDragEnd);
// adds a submit event on the user form 
form.addEventListener("submit", namesToWeather); // form addeventListener



// var popup = new mapboxgl.Popup()
// // .setLngLat([-98.489615, 29.426827])
// // .setHTML("<p>Codeup Rocks!</p>")
// // .addTo(map)


// // var alamoPopup = new mapboxgl.Popup()
// // .setHTML("<p>Remember The Alamo!</p>")
// marker.setPopup(popup);

// geocode("908 Audelia Rd, Richardson, TX 75081", MAPBOX_TOKEN).then(function(result) {
//     console.log({result});
//     map.setCenter(result);
//     map.setZoom(15);
//     let mark = new mapboxgl.Marker({
//         draggable: true
//     })
//     .setLngLat(result)
//     .addTo(map);
//     // let popup = new mapboxgl.Popup().setHTML("<p>Rocco's Pizza</p>");
//     // mark.setPopup(popup);

// });

// reverseGeocode([-98.4916, 29.4252], MAPBOX_TOKEN).then(function(results){
//     // console.log("results: ",results);
//     map.setCenter();
// });


















