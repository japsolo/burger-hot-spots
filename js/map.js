var locations = [
  ['<b>Hanburguesería 1</b>,<br>Av. San Martin 4723', -34.597497, -58.485249, 1],
  ['<b>Hamburguesas 2</b>,<br>v Francia 1996', -32.955768, -60.669351, 2],
  ['<b>Hamburguesa con papas</b>,<br>Boulevard Roca 903', -31.251259, -61.501795, 3],
  ['<b>Hamburger + Poteitos</b>,<br>Av. Av N Avellaneda 554', -26.828023, -65.196030, 4],
  ['<b>Hamburguesería</b>,<br>Av. Rodriguez Peña 2175', -32.938422, -68.771067, 5],
  ['<b>Sánguchde de Paty</b>,<br>Antartida Argentina 2560', -34.803295, -58.435435, 6],
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 2,
  center: new google.maps.LatLng(-7.131277, -63.380745),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,

    "icon": 'img/burger-icon.png',

  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
