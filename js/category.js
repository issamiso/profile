$("#quran").click(function () {
    $(".box-project , #box-store , #box-portfolio").not("#box-quran").removeClass("d-flex").addClass("d-none");
    $("#box-quran").removeClass("d-none").addClass("d-flex");


});
$("#store").click(function () {
    $(".box-project").removeClass("d-none").addClass("d-flex");
    $(".box-project , #box-quran").not("#box-store").removeClass("d-flex").addClass("d-none");
    $("#box-store").removeClass("d-none").addClass("d-flex");


});
$("#portfolio").click(function () {
    $(".box-project").removeClass("d-none").addClass("d-flex");
    $(".box-project , #box-quran , #box-store").not("#box-portfolio").removeClass("d-flex").addClass("d-none");
    $("#box-portfolio").removeClass("d-none").addClass("d-flex");


});
$("#training").click(function () {
    $(".box-project").removeClass("d-none").addClass("d-flex");
    $(".box-project , #box-quran , #box-portfolio").not("#box-training").removeClass("d-flex").addClass("d-none");
    $("#box-training").removeClass("d-none").addClass("d-flex");


});
$("#all").click(function () {
    $(".box-project").removeClass("d-none").addClass("d-flex");


});


