$(document).off();
$(document).on('click', '.popupbutton', function(event){
    openDetailsPage(event.target.name);
});

var thisJavaSnippet = dijit.registry.byId(this.id);

function openDetailsPage(xpathname) {
    mx.data.action({
        params: {
            applyto: "set",
            actionname: "CarparksAndGaraging.ACT_OpenMarkerDetail_List",
            xpath: "//CarparksAndGaraging.Location",
            constraints: "[Name = '" + xpathname + "']",
            sort: [["Name", "asc"]]
        },
        origin: thisJavaSnippet.mxform,
        error: function (error) {
            console.log(error.message);
        }
    });
}
