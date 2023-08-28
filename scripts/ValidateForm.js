// function validateForm(){
// 	let fname = document.signupform.fname.value;
// 	let lname = document.signupform.lname.value;
// 	let pass = document.signupform.pass.value;
// 	let pass_length = pass.length;
// 	// let x = document.forms['signupform']['fname'].value
// 	if (fname == null || fname == ''){
// 		alert("First Name is not filled!");
// 		return false;
// 	}else if(lname == null || lname == ''){
// 		alert("Last Name is not filled!");
// 		return false;
// 	}else if(pass_length < 6){
// 		alert("Password is smaller than 6");
// 		return false;
// 	}
// }

// $(document).ready(function() {
// 	console.log("Hello Ansh");
// 	$("#fname").click(function() {alert("Hello, world!");});
// });

// $(document).ready(function(){
// 	$('.req').attr('required', true);
// });

// $(".signupform").validate({
// 	rules:{
// 		fname:{
// 			minlength: 2
// 		}
// 	},
// 	messages: {
// 		required: "Required Input",
// 		minlength: "Name atleast 2 characters"
// 	},
// 	submitHandler: function(form){
// 		form.submit();
// 	}
// });

// JQuery(document).ready(function() {
// 	JQuery("#signupform").validate({
// 		rules: {
// 			fname: 'required',
// 			lname: 'required',
// 			email: {
// 				required: true,
//             email: true,//add an email rule that will ensure the value entered is valid email id.
//             maxlength: 255,
//         },
//     },
//     messages: {
//     	fname: 'This field is required',
//     	lname: 'This field is required',
//     	email: 'Enter a valid email',
//     },
//     submitHandler: function(form) {
//     	form.submit();
//     }
// });
// });

// jQuery("#signupform").validate({
// 	rules:{
// 		fname:"required"
// 	}, messages:{
// 		fname: "Please enter name"
// 	}
// });

// $("#sugnupform").validate({
//     rules: {
//         fname: {
//             required: true,
//             // Using the normalizer to trim the value of the element
//             // before validating it.
//             //
//             // The value of `this` inside the `normalizer` is the corresponding
//             // DOMElement. In this example, `this` references the `username` element.
//             normalizer: function(value) {
//                 return $.trim(value);
//             }
//         }
//     }
// });


$(document).ready(function(){
	// alert("Namste");
	if(document.cookie != ""){
		// alert("ram ram");
		function getCookie(){

			var myCookie = document.cookie.split(';');
			var ids = ['fname', 'lname', 'email','country', 'pass', 'repass']
			// alert(myCookie);
			var fname = "fname";
			for(key in myCookie){
				// alert(myCookie[key]);
				for(i in ids){
					if($.trim(myCookie[key]).indexOf(ids[i]) === 0){
						// alert(myCookie[key]);
						// alert($.trim(myCookie[key]) + " " + $.trim(myCookie[key]).indexOf(ids[i]));
						// alert($.trim(myCookie[key]));
						// $(ids)[i].val(decodeURIComponent($.trim(myCookie[key].split('=')[1])));
						value = decodeURIComponent($.trim(myCookie[key]).split('=')[1]);
						$('#' + ids[i]).val(value);
						// alert(ids[i] + " " + value);
					}
				}
			}
			// for(i in myCookie){
			// 	// console.log($.trim(myCookie[i]));
			// 	var value = decodeURIComponent($.trim(myCookie[i]).split('=')[1]);
			// 	console.log(value);
			// 	console.log(ids[i]);
			// 	$(ids[i]).val(value);
			// }
			// $(ids[5]).val(decodeURIComponent($.trim(myCookie[3]).split('=')[1]));
		}

		// alert('hello');
		if(confirm("Hello " + $.trim($('#fname').val()) + ", Welcome back do you want to sign in again?")){
			
			getCookie();

		}
	}
});


$(document).ready(function(){
	$("#submit_btn").click(function(){


		// document.cookie = "fname=Ansh";

		function checkStr(_string)
		{
			let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
			if(spChars.test(_string)){
				return true;
			} else {
				return false;
			}
		}

		function IsEmail(email) {
			var regex =
			/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (!regex.test(email)) {
				return false;
			}
			else {
				return true;
			}
		}

		// Getting the values of input section to variables
		var f_name = $.trim($('#fname').val());
		var l_name = $.trim($('#lname').val());
		var country = $.trim($('#country').val());
		var email = $.trim($('#email').val());
		var pass = $.trim($('#pass').val());
		var repass = $.trim($('#repass').val());

		// trimming the spaces
		// f_name = $.trim(f_name);
		// l_name = $.trim(l_name);
		// email = $.trim(email);
		// pass = $.trim(pass);
		// repass = $.trim(repass);
		
		// Different input section empty state, false denote filled, true denotes empty 
		var f_name_err = false;
		var l_name_err = false;
		var country_err = false;
		var email_err = false;
		var pass_err = false;
		var repass_err = false;
		var error = false;
		var f_name_length_err = false;
		var pass_length_err = false;
		var repass_length_err = false;
		var pass_compare_err = false;
		var pass_condition_err = false;
		var email_condition_err = false;

		// reseting the message spans
		$('#fname_error').html('');
		$('#lname_error').html('');
		$('#country_error').html('');
		$('#email_error').html('');
		$('#pass_error').html('');
		$('#repass_error').html('');
		// $('.error_msg').hide();

		// console.log(f_name.length);

		// Checking if all the required conditions are satisfied or not
		if(f_name == ""){
			f_name_err = true;
		}
		if(l_name == ""){
			l_name_err = false;
		}
		if(country == ""){
			country_err = true;
		}
		if(email == ""){
			email_err = true;
		}
		if(pass == ""){
			pass_err = true;
		}
		if(repass == ""){
			repass_err = true;
		}
		if((f_name.length < 3 && f_name.length > 0)){
			f_name_length_err = true;
		} else if ((f_name.length > 25)){
			f_name_length_err = true;
		}
		if(pass != repass){
			pass_compare_err = true;
		}
		if(pass.length > 0 && pass.length < 8){
			pass_condition_err = true; 
		} else if(checkStr(pass) == false && pass.length > 7){
			pass_condition_err = true; 
		}if(IsEmail(email) == false) {
			email_condition_err = true;
		}
		// console.log("bug");


		// If any ibe condition is true then message should be displayed and the submit button should not work
		if(f_name_err == true || l_name_err == true || country_err == true || email_err == true || pass_err == true || repass_err == true || f_name_length_err == true || pass_compare_err == true || pass_condition_err == true || email_condition_err == true){
			error = true;
		}

		// console.log(error);

		// Showing output accordingly
		if(error == true){
			if(f_name_err == true){
				$('#fname_error').html('First name should be filled');
			}
			if(l_name_err == true){
				$('#lname_error').html('Last name should be filled');
			}
			if(country_err == true){
				$('#country_error').html('Country should be filled');
			}
			if(email_condition_err == true){
				$('#email_error').html('Its not a proper email');	
			}
			if(email_err == true){
				$('#email_error').html('Email should be filled');
			}
			if(pass_err == true){
				$('#pass_error').html('Password should be filled');
			}
			if(f_name_length_err == true){
				$('#fname_error').html('First name should be 3 to 25 chars long');
			}
			if(pass_compare_err == true){
				$('#repass_error').html("Password doesn't match");
			}
			if(repass_err == true){
				$('#repass_error').html('Password should be filled');
			}
			if(pass_condition_err == true){
				$('#pass_error').html('Should have more than 8 chars and special character');
			}

			return false;

		}else{
			const d = new Date();
			d.setDate(d.getDate() + 14);
			alert(d);
			document.cookie = "fname="+encodeURIComponent(f_name)+";expires="+d+";path=/";
			document.cookie = "lname="+encodeURIComponent(l_name)+";expires="+d+";path=/";
			document.cookie = "country="+(country)+";expires="+d+";path=/";
			document.cookie = "email="+encodeURIComponent(email)+";expires="+d+";path=/";
			document.cookie = "pass="+encodeURIComponent(pass)+";expires="+d+";path=/";
			document.cookie = "repass="+encodeURIComponent(repass)+";expires="+d+";path=/";

			return true;
		}

	});
});
