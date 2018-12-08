  // Function to capitalize first letter in inputs and city names shown
  $(document).ready(function () {  
    $(".form-control").keyup(function () {  
        $('.form-control').css('textTransform', 'capitalize');
        $('.cityName').css('textTransform', 'capitalize');
    });  
});
