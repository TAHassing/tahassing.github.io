$(document).ready(function() {

  $('.modal-link').click(function(){
    var id = $(this).data('id');
    $('#'+id).modal('show');
  });

});