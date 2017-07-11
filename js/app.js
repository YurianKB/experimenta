$(document).ready(function (){

var  $pagoTarjeta = $('#test2');

  $pagoTarjeta.change(function(){
    $('#info-tarjeta').css('display', 'block');
  })
  $('#test1').change(function(){
    $('#info-tarjeta').css('display', 'none');
  })
})

$('#textarea1').val('New Text');
 $('#textarea1').trigger('autoresize');


/*$(document).ready(function() {
  Materialize.updateTextFields();
});

$('#textarea1').val('New Text');
$('#textarea1').trigger('autoresize');
*/
