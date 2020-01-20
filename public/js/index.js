let allBuses;
let map;
let LatLng;

$.get("api/all-buses", function(info) {
    // for (let i = 0; i < 9; i++) {
    //     $('#bus-info').append(`<li> ${info[i].route} </li>`);
    // }
    allBuses = info;
})

$("#busRouteInputBtn").on("click", function(e) {
    e.preventDefault();
    let searchedRoute = $("#busRouteInput").val().trim().toString();
    searchForRoute(searchedRoute);
});

const searchForRoute = (n) => {
    $("#chosenBus").empty();
    $("#busRouteInput").val('');

    const result = allBuses.find(({route}) => route === n);
    console.log("resut:", result);
    
    if(result === undefined){
        $("#chosenBus").append(`<span>No buses found for Route ${n}.</span>`);
    }
    else{
        $("#chosenBus").append(`<p>Route: ${result.route}</p><p>Latitude: ${result.lat}</p><p>Longitude: ${result.long}</p><p>Time Point: ${result.time}</p>`);
        
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(result.lat, result.long), 
            map: map,
            label: result.route
        });
    }
}




function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.753746, lng: -84.386330},
        zoom: 10
    });
}


