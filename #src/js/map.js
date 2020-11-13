window.initMap = function() {
    var location = {lat: 52.090185, lng: 23.694595};
    var markerloc = {lat: 52.090185, lng: 23.694595};
    map = new google.maps.Map(document.getElementById('map'), {
       center: location,
       scrollwheel: false,
       zoom: 16,
       styles: [
        {
            "stylers": [
                {
                    "hue": "#2c3e50"
                },
                {
                    "saturation": 250
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 50
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]
    });
    var marker = new google.maps.Marker({
       position: markerloc,
       map: map,
    });
  };