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

$( document ).ready(
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
            $("#submitting").removeClass("on")

            if (!$("#success").hasClass("on")) {
              $("#success").addClass("on")
            }

            clearForm()
          },
          function(error) {
            $("#submitting").removeClass("on")
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
  }),

  $("#menu-icon").on("click", () => {
    if ( $("#menu-icon").hasClass("cross") ) {
      $("#menu-icon").removeClass("cross")
      $("#menu").removeClass("overlay-on")
    } else {
      $("#menu-icon").addClass("cross")
      $("#menu").addClass("overlay-on")
    }
  }),

  $("#menu > li").on("click", () => {
    if ( $("#menu-icon").hasClass("cross") ) {
      $("#menu-icon").removeClass("cross")
      $("#menu").removeClass("overlay-on")
    }
  }),

  $("#submit-close").on("click", () => {
    if ($("#submit").hasClass("on")) {
      $("#submit").removeClass("on")
    }

    if ($("#success").hasClass("on")) {
      $("#success").removeClass("on")
    }
  }),

  $("#chi-rm-button").on("click", () => {
    $("#readmore-chi").toggleClass("on")
    $("#chi-rl-button").toggleClass("on")
    $("#chi-rm-button").toggleClass("on")
  }),

  $("#chi-rl-button").on("click", () => {
    $("#readmore-chi").toggleClass("on")
    $("#chi-rl-button").toggleClass("on")
    $("#chi-rm-button").toggleClass("on")
  }),

  $("#submit").on("click", () => {
    if ($("#submit").hasClass("on")) {
      $("#submit").removeClass("on")
    }

    if ($("#success").hasClass("on")) {
      $("#success").removeClass("on")
    }
  }),

  $("#vero-rm-button").on("click", () => {
    $("#readmore-vero").toggleClass("on")
    $("#vero-rl-button").toggleClass("on")
    $("#vero-rm-button").toggleClass("on")
  }),

  $("#vero-rl-button").on("click", () => {
    $("#readmore-vero").toggleClass("on")
    $("#vero-rl-button").toggleClass("on")
    $("#vero-rm-button").toggleClass("on")
  }),

  $("#wayw-rm-button").on("click", () => {
    $("#readmore-wayw").toggleClass("on")
    $("#wayw-rl-button").toggleClass("on")
    $("#wayw-rm-button").toggleClass("on")
  }),

  $("#wayw-rl-button").on("click", () => {
    $("#readmore-wayw").toggleClass("on")
    $("#wayw-rl-button").toggleClass("on")
    $("#wayw-rm-button").toggleClass("on")
  })
) 