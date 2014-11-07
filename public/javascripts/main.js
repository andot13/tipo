$(document).ready(function() {

//form validation rules
    $("#contact-us-form").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Please enter your name",
            email: "Oops! Please provide a valid email address"
        },
        errorElement: "div",
        wrapper: "div",  // a wrapper around the error message
        errorPlacement: function(error, element) {
         	element.before(error);
	        offset = element.offset();
	        error.addClass('message');  // add a class to the wrapper
	        offset = element.offset();
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

});
