window.initMap = function() {
    var location = {lat: 52.09, lng: 23.69};
    var markerloc = {lat: 52.09, lng: 23.69};
    map = new google.maps.Map(document.getElementById('map'), {
       center: location,
       scrollwheel: false,
       zoom: 16,
       disableDefaultUI: true,
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
      icon: '../img/map_icon.png',
      position: markerloc,
      map: map,
    });
  };