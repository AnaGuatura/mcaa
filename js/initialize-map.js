// The location of Uluru
const uluru = { lat: -25.344, lng: 131.036 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 4,
  center: uluru,
});


$(document).ready(function() {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
