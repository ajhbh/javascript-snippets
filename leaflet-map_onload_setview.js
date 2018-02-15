//doesn't work with map as map not ready.
$('document').ready(function () {
    var mapWidget = dijit.registry.byId(document.querySelector(".mapWidget").id);
    var thisJavaSnippet = dijit.registry.byId(this.id);

    var latitude = thisJavaSnippet.mxcontext.trackObject.jsonData.attributes.AlternativeLatitude.value;
    var longitude = thisJavaSnippet.mxcontext.trackObject.jsonData.attributes.AlternativeLongitude.value;

    mapWidget._map.whenReady(
        mapWidget._map.setView([latitude, longitude], 16)
    );
});

setTimeout(
    var mapWidget = dijit.registry.byId(document.querySelector(".mapWidget").id);

    var latitude = mapWidget.mxcontext.trackObject.jsonData.attributes.AlternativeLatitude.value;
    var longitude = mapWidget.mxcontext.trackObject.jsonData.attributes.AlternativeLongitude.value;

    mapWidget._map.whenReady(
        mapWidget._map.setView([latitude, longitude], 16)
    ), 0
);
