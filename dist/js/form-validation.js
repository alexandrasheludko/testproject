// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      tel: {
        required: true,
        minlength: "17",
        maxlength: "18"
      }
    },
    // Specify validation error messages
    messages: {
      name: "Пожалуйста введите ваше имя",
      email: "Пожалуйста введите email",
      tel: "Пожалуйста введите ваш номер телефона"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});