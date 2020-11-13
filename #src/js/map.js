window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: 52.090050, lng: 23.694638},
       scrollwheel: false,
       zoom: 15,
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
      position: {lat: 52.090050, lng: 23.694638},
      map: map,
    });
  };