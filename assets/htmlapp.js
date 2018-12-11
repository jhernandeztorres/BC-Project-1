  // Function to capitalize first letter in inputs and city names shown
  $(document).ready(function () {  
    $(".form-control").keyup(function () {  
        $('#location-input').css('textTransform', 'capitalize');
        $('#destination-input').css('textTransform', 'capitalize');
        $('.cityName').css('textTransform', 'capitalize');
    });  
});
