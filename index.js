$(document).ready(function () {
    var WEBSITE_NAME = window.location.origin;
    $("#search-files-button").on("click", function () {
        window.location.href = "" + WEBSITE_NAME +"/search/" + $("#search_textbox").val() + "/1/";

    });
});