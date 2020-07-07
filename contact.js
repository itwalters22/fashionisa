
function validateForm(){
    var emails_fmt =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(email.value.match(emails_fmt))) {
        alert('Please enter a valid email');
        email.focus();
        return false;
    } else {
        return true;
    }
}

$('.contact1-form').on('submit',function(e){

        //optional validation code here
        if(!validateForm()){
            $('.contact1-form')[0].reset();
            return false;
        }

        e.preventDefault();

      
        $.ajax({

            url: "https://script.google.com/macros/s/AKfycbwd5KQG404j0CYd3OPiHlXXJfKYM8hr2C_KbEqMIwk8zEu63V9Q/exec",

            method: "POST",

            dataType: "json",

            data: $(".contact1-form").serialize(),

            success: function(response) {

                
                if(response.result == "success") {


                    $('.contact1-form')[0].reset();

                    alert('Your email has been added to our list.');

                    modal.style.display = "none";

                    return true;

                }

                else {

                    alert("Something went wrong. Please try again.")

                }

            },

            error: function() {

                

                alert("Something went wrong. Please try again.")

            }

        })

    });

