var mapWidget = dijit.registry.byId(document.querySelector(".mapWidget").id);
var thisJavaSnippet = dijit.registry.byId(this.id);
var homeTrackId = thisJavaSnippet.mxcontext.trackId;

if (!(homeTrackId === "")) {
var latitude = thisJavaSnippet.mxcontext.trackObject.jsonData.attributes.Latitude.value;
var longitude = thisJavaSnippet.mxcontext.trackObject.jsonData.attributes.Longitude.value;

mapWidget._map.setView([latitude, longitude], 14);
};
