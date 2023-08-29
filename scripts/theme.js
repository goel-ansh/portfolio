$(document).ready(function(){
	if($('#theme').val() != localStorage.getItem('theme')){
		$('#theme').val(localStorage.getItem('theme'));
	}

	function light_theme(){
		alert("light theme");
	}
	function dark_theme(){
		alert("dark theme");		
	}
	function blue_theme(){
		alert("blue theme");		
	}
	$('#theme').on('change',function(){
		if($('#theme').val() == 'light') light_theme();
		else if($('#theme').val() == 'dark') dark_theme();
		else if($('#theme').val() == 'blue') blue_theme();

		localStorage.setItem('theme', $('#theme').val());

	});
});