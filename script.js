

$( ".table" ).click(function() {
  tableID = this.id;
  console.log(tableID);
  $( "#popBox" ).fadeIn();
  $('#tableNumberLine').text("Table Number: " + tableID);
});

$( "#close" ).click(function() {
  $( "#popBox" ).fadeOut();
  $('#name').val('');
  $('#phoneNumber').val('');
  $('#partySize').val('');
});

$( "#saveButton" ).click(function(e) {
  console.log(tableID);
  $(`#${tableID}`).removeClass("available");
  $(`#${tableID}`).addClass("reserved");
  $( "#popBox" ).fadeOut();
});

$(function () {
    $('.table').hover(function() {
       $('#reserveBox').fadeToggle("fast");
    });
});