window.initMap = function() {
    var location = {lat: 51.47672559, lng: -3.17107379};
    var markerloc = {lat: 51.476852, lng: -3.167869};
    map = new google.maps.Map(document.getElementById('map'), {
       center: location,
       scrollwheel: false,
       zoom: 17
    });
    var marker = new google.maps.Marker({
       position: markerloc,
       map: map,
       title: 'Hello World!'
    });
  };