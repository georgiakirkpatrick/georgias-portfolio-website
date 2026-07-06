const clearForm = () => {
  $( "form :input" ).val( "" )
  if ($("#copy").checked) {
      $("#copy").removeProp("checked")
  }
}

const validateEmail = email => {
  const res = /^[^@]+@\w+(\.\w+)+\w$/
  return res.test(email)
}

$( document ).ready(() => {
  // --- Contact Form Submission Handler ---
  $("#contact-form").on("submit", event => {
    event.preventDefault()

    if ($("#success").hasClass("on")) {
      console.log('it was on')
      $("#success").removeClass("on")
    }

    const formName = $('#user_name').val()
    const formEmail = $('#user_email').val()
    const formMessage = $('#message').val()

    if (formName !== '' && formEmail !== '' && formMessage !== "") {
      if (validateEmail(formEmail)) {
        if (!$("#submitting").hasClass("on")) {
          $("#submitting").addClass("on")
        }
        
        if (!$("#submit").hasClass("on")) {
          $("#submit").addClass("on")
        }

        emailjs.sendForm('service_wqghlcv', 'template_ktq0bk6', "#contact-form")
          .then(function() {
            $("#submitting").removeClass("on")

            if (!$("#success").hasClass("on")) {
              $("#success").addClass("on")
            }

            clearForm()
          },
          function(error) {
            $("#submitting").removeClass("on")
            
            if (!$("#failure").hasClass("on")) {
              $("#failure").addClass("on")
            }
            
            console.log(`HTTP error! Status: ${error.status}`)
            console.log(`HTTP error! Error: ${error.text}`)
          })
      } else {
        window.alert("Please enter a valid email address.")
      }
    } else {
      window.alert("Please include your name, email, and a message.")
    }
  });

  // --- Mobile Navigation Handlers ---
  $("#menu-icon").on("click", () => {
    if ( $("#menu-icon").hasClass("cross") ) {
      $("#menu-icon").removeClass("cross")
      $("#menu").removeClass("overlay-on")
    } else {
      $("#menu-icon").addClass("cross")
      $("#menu").addClass("overlay-on")
    }
  });

  $("#menu > li").on("click", () => {
    if ( $("#menu-icon").hasClass("cross") ) {
      $("#menu-icon").removeClass("cross")
      $("#menu").removeClass("overlay-on")
    }
  });

  // --- Modal / Popup Close Handlers ---
  $("#submit-close").on("click", () => {
    if ($("#submit").hasClass("on")) {
      $("#submit").removeClass("on")
    }

    if ($("#success").hasClass("on")) {
      $("#success").removeClass("on")
    }
  });

  $("#submit").on("click", () => {
    if ($("#submit").hasClass("on")) {
      $("#submit").removeClass("on")
    }

    if ($("#success").hasClass("on")) {
      $("#success").removeClass("on")
    }
  });

  // --- Project Panel Toggle Handlers ---

  // 1. KEEN Sustainability Internship
  $("#keen-rm-button").on("click", () => {
    $("#readmore-keen").toggleClass("on")
    $("#keen-rl-button").toggleClass("on")
    $("#keen-rm-button").toggleClass("on")
  });

  $("#keen-rl-button").on("click", () => {
    $("#readmore-keen").toggleClass("on")
    $("#keen-rl-button").toggleClass("on")
    $("#keen-rm-button").toggleClass("on")
  });

  // 2. Data Governance Guide
  $("#gov-rm-button").on("click", () => {
    $("#readmore-gov").toggleClass("on")
    $("#gov-rl-button").toggleClass("on")
    $("#gov-rm-button").toggleClass("on")
  });

  $("#gov-rl-button").on("click", () => {
    $("#readmore-gov").toggleClass("on")
    $("#gov-rl-button").toggleClass("on")
    $("#gov-rm-button").toggleClass("on")
  });

  // 3. Salmon Conservation Study
  $("#sal-rm-button").on("click", () => {
    $("#readmore-sal").toggleClass("on")
    $("#sal-rl-button").toggleClass("on")
    $("#sal-rm-button").toggleClass("on")
  });

  $("#sal-rl-button").on("click", () => {
    $("#readmore-sal").toggleClass("on")
    $("#sal-rl-button").toggleClass("on")
    $("#sal-rm-button").toggleClass("on")
  });

  // 4. Veronaut (Capstone)
  $("#vero-rm-button").on("click", () => {
    $("#readmore-vero").toggleClass("on")
    $("#vero-rl-button").toggleClass("on")
    $("#vero-rm-button").toggleClass("on")
  });

  $("#vero-rl-button").on("click", () => {
    $("#readmore-vero").toggleClass("on")
    $("#vero-rl-button").toggleClass("on")
    $("#vero-rm-button").toggleClass("on")
  });

  // 5. Chivolo
  $("#chi-rm-button").on("click", () => {
    $("#readmore-chi").toggleClass("on")
    $("#chi-rl-button").toggleClass("on")
    $("#chi-rm-button").toggleClass("on")
  });

  $("#chi-rl-button").on("click", () => {
    $("#readmore-chi").toggleClass("on")
    $("#chi-rl-button").toggleClass("on")
    $("#chi-rm-button").toggleClass("on")
  });

  // 6. What Are You Wearing? Quiz
  $("#wayw-rm-button").on("click", () => {
    $("#readmore-wayw").toggleClass("on")
    $("#wayw-rl-button").toggleClass("on")
    $("#wayw-rm-button").toggleClass("on")
  });

  $("#wayw-rl-button").on("click", () => {
    $("#readmore-wayw").toggleClass("on")
    $("#wayw-rl-button").toggleClass("on")
    $("#wayw-rm-button").toggleClass("on")
  });
});