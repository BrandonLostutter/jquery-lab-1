

$( ".table" ).click(function() {
  tableID = this.id;
  console.log(tableID);
  $( "#popBox" ).fadeIn();
  $('#tableNumberLine').text("Table Number: " + tableID);
});

$( "#close" ).click(function() {
  console.log("click");
  $( "#popBox" ).fadeOut();
  $('#name').val('');
  $('#phoneNumber').val('');
  $('#partySize').val('');
});

$( "#saveButton" ).click(function(e) {
  $(e.tableID).removeClass("available");
  $(e.tableID).addClass("reserved");
  $( "#popBox" ).fadeOut();
});

