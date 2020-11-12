window.initMap = function() {
    var location = {lat: 52.090185, lng: 23.694595};
    var markerloc = {lat: 52.090185, lng: 23.694595};
    map = new google.maps.Map(document.getElementById('map'), {
       center: location,
       scrollwheel: false,
       zoom: 16
    });
    var marker = new google.maps.Marker({
       position: markerloc,
       map: map,
    });
    styles: [
        {
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#004399"
            },
            {
              "saturation": 5
            },
            {
              "lightness": 65
            },
            {
              "weight": 2.5
            }
          ]
        }
      ]
  };