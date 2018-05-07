function initMap() {
    var center = {lat: 47.6728191, lng: -117.4321895};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13.5,
      center: center
    });

    var geocoder1 = new google.maps.Geocoder();
    var geocoder2 = new google.maps.Geocoder();
    var geocoder3 = new google.maps.Geocoder();

    let content1 = '<div>' + 
    '<h1>D.lish Hamburgers</h1>' +
    '<p>Best Burgers in Spokane</p>'

    let content2 = '<div>' + 
    '<h1>Gerardo\'s Authentic Mexican</h1>' +
    '<p>Honestly this place has the best California Burrito I\'ve ever had. Loren Colpo is dumb for thinking that Atilano\'s is better.</p>'

    let content3 = '<div>' + 
    '<h1>The Yard\'s Bruncheon</h1>' +
    '<p>This place is super trendy. They aren\'t the cheapest but have great food. The drinks are good to but way to fancy for a brunch place. Feels like a slice of Portland.</p>'

    var infowindow1 = new google.maps.InfoWindow({
        content: content1
      });

    var infowindow2 = new google.maps.InfoWindow({
        content: content2
      });

    var infowindow3 = new google.maps.InfoWindow({
        content: content3
      });

    geocoder1.geocode({'address': '1625 N Division St, Spokane, WA 99207'}, function(results, status) {
        if (status === 'OK') {
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });

          marker.addListener('click', function() {
            map.setZoom(18);
            map.setCenter(marker.getPosition());
          });

          marker.addListener('mouseover', function() {
            infowindow1.open(map, marker);
          });

          marker.addListener('mouseout', function() {
            infowindow1.close();
          });
        }
    });

    geocoder2.geocode({'address': '2706 N Monroe St, Spokane, WA 99205'}, function(results, status) {
        if (status === 'OK') {
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });

          marker.addListener('click', function() {
            map.setZoom(18);
            map.setCenter(marker.getPosition());
          });

          marker.addListener('mouseover', function() {
            infowindow2.open(map, marker);
          });

          marker.addListener('mouseout', function() {
            infowindow2.close();
          });
        }
    });

    geocoder3.geocode({'address': '1248 W Summit Pkwy, Spokane, WA 99201'}, function(results, status) {
        if (status === 'OK') {
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });

          marker.addListener('click', function() {
            map.setZoom(18);
            map.setCenter(marker.getPosition());
          });

          marker.addListener('mouseover', function() {
            infowindow3.open(map, marker);
          });

          marker.addListener('mouseout', function() {
            infowindow3.close();
          });
        }
    });
  }