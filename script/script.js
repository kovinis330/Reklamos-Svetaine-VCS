//Google maps
function initMap() {
  var prospektas = {lat: 54.689346, lng: 25.270927};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: prospektas,
    scrollwheel: false,
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
  });
  var marker = new google.maps.Marker({
    position: prospektas,
    map: map
  });
}

// DARBAI
function bus(){
  document.getElementById("magazine").classList.add("none");
  document.getElementById("magazine").classList.remove("display");
  document.getElementById("leaflet").classList.add("none");
  document.getElementById("leaflet").classList.remove("display");
  document.getElementById("bus").classList.add("display");
}
function magazine(){
  document.getElementById("bus").classList.add("none");
  document.getElementById("bus").classList.remove("display");
  document.getElementById("leaflet").classList.add("none");
  document.getElementById("leaflet").classList.remove("display");
  document.getElementById("magazine").classList.add("display");
}
function leaflet(){
  document.getElementById("bus").classList.add("none");
  document.getElementById("bus").classList.remove("display");
  document.getElementById("magazine").classList.add("none");
  document.getElementById("magazine").classList.remove("display");
  document.getElementById("leaflet").classList.add("display");
}
//Navigacija
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//Darbo valandos
var counter = 0;
var interval = setInterval(myTimer1, 5000);
function myTimer1() {
  if (counter < 2500 && document.hasFocus()) {
    var interval = setInterval(timer, 1);
    function timer(){
      counter+=10;
      if (counter == 2500) {
        clearInterval(interval);
      }
      $("#counter1").text(counter);
    }
  } else {
    counter = 0;
  }
}

//Patenkinti klientai
var counter2 = 0;
var interval = setInterval(myTimer2, 5000);
function myTimer2() {
  if (counter2 < 840 && document.hasFocus()) {
    var interval = setInterval(timer2, 2);
    function timer2(){
      counter2+=3;
      if (counter2 == 840) {
        clearInterval(interval);
      }
      $("#counter2").text(counter2);
    }
  } else {
    counter2 = 0;
  }
}

//Ivykdyti projektai
var counter3 = 0;
var interval = setInterval(myTimer3, 5000);
function myTimer3() {
  if (counter3 < 330 && document.hasFocus()) {
    var interval = setInterval(timer3, 2);
    function timer3(){
      counter3+=1;
      if (counter3 == 330) {
        clearInterval(interval);
      }
      $("#counter3").text(counter3);
    }
  } else {
    counter3 = 0;
  }
}

//Apdovanojimai
var counter4 = 0;
var interval = setInterval(myTimer4, 5000);
function myTimer4() {
  if (counter4 < 44 && document.hasFocus()) {
    var interval = setInterval(timer4, 20);
    function timer4(){
      counter4+=1;
      if (counter4 == 44) {
        clearInterval(interval);
      }
      $("#counter4").text(counter4);
    }
  } else {
    counter4 = 0;
  }
}
