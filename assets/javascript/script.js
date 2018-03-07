
$(document).ready(function () {


    var idArray = []

    // Beermap aJax request
    $.ajax({
        url: "http://crossorigin.me/http://beermapping.com/webservice/loccity/121057043ca94017756eba03de32992c&s=json/irvine,ca",
        method: "GET"
    }).then(function (response) {


        for (i = 0; i < response.length; i++) {
            var locRespId = response[i].id
            idArray.push(locRespId)
        }
        console.log(idArray)

    })

    
    for (i = 0; i < idArray.length; i++) {

        var locId = idArray[i]
        console.log("test")
        $.ajax({
            url: "http://crossorigin.me/http://beermapping.com/webservice/locmap/121057043ca94017756eba03de32992c&s=json/4",
            method: "GET"
        }).then(function (response) {


            console.log(response)

        })
    }

})
// END OF DOCUMENT READY

// Placeholder Location Array
var locations = [
    { lat: -31.563910, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.750000, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.773700, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438000 },
    { lat: -43.999792, lng: 170.463352 }
]

var apiKey = "AIzaSyDIfqzijKvhMUtMvwGLgZNbIooIGHgHjdE"

function initMap() {
    var center = { lat: -31.563910, lng: 147.154312 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center
    });
    for (i = 0; i < locations.length; i++) {
        var position = locations[i]
        var marker = new google.maps.Marker({
            position: position,
            map: map
        });

    }

}