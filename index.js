$("#cover1-btn").click(() => {
    $("#cover1").addClass( "invisible" );
    $("#overlay").delay(2000).fadeIn(100);
});

$("#cover2-btn").click(() => {
    $("#cover2").addClass( "invisible" );
});

$("#cover3-btn").click(() => {
  $("#overlay").hide();
  $("#factchecker").delay(1000).fadeIn(100);
});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
