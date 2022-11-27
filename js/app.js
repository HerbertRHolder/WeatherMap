
// mapboxgl.accessToken = MAPBOX_TOKEN;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 10,
//     center: [-98.4916, 29.4252]
// });

// var marker = new mapboxgl.Marker({
//     draggable: true
// })
//     .setLngLat([-98.4916, 29.4252])
//     .addTo(map)
// let res = geocode("Dallas , TX", MAPBOX_TOKEN);
// console.log({ res });
let doc = document;
let form = document.getElementById("search");
console.log({ form });
let forcast = document.getElementsByClassName("deg-insert")
let arr = [];
arr = Array.from(forcast);
console.log(arr);
arr.map(deg => deg.innerHTML = `${50}˚`);




// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let input = e.target[0].value;
//     console.log(e.target[0].value);

//     geocode(input, MAPBOX_TOKEN).then(function (result) {
//         console.log({ result });
//         map.setCenter(result);
//         map.setZoom(15);
//         let mark = new mapboxgl.Marker({
//             draggable: true
//         })
//             .setLngLat(result)
//             .addTo(map);

//     });// geocode funct

//         $.get("http://api.openweathermap.org/data/2.5/weather", {
//             APPID: WEATHER_TOKEN,
//             q: `${input}, USA`,
//             units: "imperial"

//         }).done(function (data) {
//             $("#degrees").html(parseInt(data.main.temp) + "˚");
//             console.log('Done data: ', data);
//             data;
//         });








// }); // form addeventListener



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


















