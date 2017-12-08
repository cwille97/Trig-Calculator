form.onsubmit = (function(e) {
	e.preventDefault();



if (document.customize.sine.checked == true) { // the else statements here should be redundent because the variables were initiated as false and should only be changed to true if the user has selected true
	true_sine = true;
}
else {
	true_sine = false;
}

if (document.customize.cosine.checked == true) {
	true_cosine = true;
}
else {
	true_cosine = false;
}

if (document.customize.tangent.checked == true) {
	true_tangent = true;
}
else {
	true_tangent = false;
}

if (document.customize.secant.checked == true) {
	true_secant = true;
}
else {
	true_secant = false;
}


if (document.customize.cosecant.checked == true) {
	true_cosecant = true;
}
else {
	true_cosecant = false;
}

if (document.customize.cotangent.checked == true) {
	true_cotangent = true;
}
else {
	true_cotangent = false;
}




window.location.href = "index.html";

});
