$(document).ready(function() {

    
    function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('search_map'), {
            center: { 
                lat: 39.9612,
                lng: -82.9988
            },
            scrollwheel: false,
            zoom: 12
        });
    }

    initMap();
    
});