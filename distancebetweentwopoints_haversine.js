// works if there is an element with distance class in the parent element of the jssnippetWidget
var nodes = document.querySelectorAll(".filterdataview");
var filterDataviewElement = nodes[nodes.length - 1];
var filterDataviewWidget = dijit.registry.byId(filterDataviewElement.id);
var thisJavaSnippet = dijit.registry.byId(this.id);

var latitude = parseFloat(thisJavaSnippet.mxcontext.trackObject.jsonData.attributes.Latitude.value);
var longitude = parseFloat(thisJavaSnippet.mxcontext.trackObject.jsonData.attributes.Longitude.value);
var altlatitude = parseFloat(filterDataviewWidget.mxcontext.trackObject.jsonData.attributes.AlternativeLatitude.value);
var altlongitude = parseFloat(filterDataviewWidget.mxcontext.trackObject.jsonData.attributes.AlternativeLongitude.value);

var textstring = "Distance: " + haversine(latitude, longitude, altlatitude, altlongitude) + "m. ";
var textnode = document.createTextNode(textstring);
document.getElementById(this.id).parentNode.getElementsByClassName('distance')[0].appendChild(textnode);

function haversine() {
    var radians = Array.prototype.map.call(arguments, function (deg) {
        return deg / 180.0 * Math.PI;
    });
    var lat1 = radians[0],
        lon1 = radians[1],
        lat2 = radians[2],
        lon2 = radians[3];
    var R = 6371000; // metres
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.asin(Math.sqrt(a));
    return Math.round(R * c);
}
