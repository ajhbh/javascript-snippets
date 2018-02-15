var mapWidget = dijit.registry.byId(document.querySelector(".mapWidget").id);
var thisJavaSnippet = dijit.registry.byId(this.id);

var latitude = thisJavaSnippet.mxcontext.trackObject.jsonData.attributes.Latitude.value;
var longitude = thisJavaSnippet.mxcontext.trackObject.jsonData.attributes.Longitude.value;

mapWidget._map.setView([latitude, longitude], 16);
mapWidget._map.eachLayer(function (layer) {
    if (!!layer.getLatLng) {
        if (layer.getLatLng().equals([latitude, longitude])) {
            layer.openPopup();
        };
    }
});
