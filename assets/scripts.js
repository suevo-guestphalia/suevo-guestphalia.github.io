$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function redirect_by_number(){	
	window.location.href = "ahnen/" + document.getElementById('nummer').value;
}
