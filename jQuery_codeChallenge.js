//JavaScript Code Challenge, July 1st 2016
$(document).ready(function() {

var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;

  $('#redButton').on('click', function(event) {
    event.preventDefault();
    $('.container').append('<div class="color-cube red"></div>');
    redCount++;
    $('#red').empty();
    $('#red').append('Total red: ' + redCount);
  })

  $('#yellowButton').on('click', function(event) {
    event.preventDefault();
    $('.container').append('<div class="color-cube yellow"></div>');
    yellowCount++;
    $('#yellow').empty();
    $('#yellow').append('Total yellow: ' + yellowCount);
  })

  $('#greenButton').on('click', function(event) {
    event.preventDefault();
    $('.container').append('<div class="color-cube green"></div>');
    greenCount++;
    $('#green').empty();
    $('#green').append('Total green: ' + greenCount);
  })

  $('#blueButton').on('click', function(event) {
    event.preventDefault();
    $('.container').append('<div class="color-cube blue"></div>');
    blueCount++;
    $('#blue').empty();
    $('#blue').append('Total blue: ' + blueCount);
  })

});
