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

        if ($("#thanks").hasClass("on")) {
            console.log('it was on')
            $("#thanks").removeClass("on")
        }

        const formName = $('#name').val()
        const formEmail = $('#email').val()
        const formSubject = $('#subject').val()
        const formMessage = $('#message').val()
        const formCopy = $("#copy").is(":checked")

        if (formName !== '' && formEmail !== '' && formMessage !== "") {
            if (validateEmail(formEmail)) {
                const fd = new FormData()

                if (!$("#submitting").hasClass("on")) {
                    $("#submitting").addClass("on")
                }
                
                if (!$("#success").hasClass("on")) {
                    $("#success").addClass("on")
                }

                fd.append('formName', formName)
                fd.append('formEmail', formEmail)
                fd.append('formSubject', formSubject)
                fd.append('formMessage', formMessage)

                if (formCopy) {
                    fd.append("formCopy", true)
                }

                fetch("send-mail.php", {
                    method: "POST",
                    body: fd
                })
                .then(response => {
                    if(!response.ok) {
                        throw new Error(`HTTP error! Status:
                        ${response.status}`)
                    } else {
                        $("#submitting").removeClass("on")

                        if (!$("#thanks").hasClass("on")) {
                            $("#thanks").addClass("on")
                        }
                    }

                    return response.text()
                })
                .then(txt => {
                    console.log('here is the text', txt)
                    $("#copy").prop("checked", false)
                    clearForm()
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

    $("#success-close").on("click", () => {
        if ($("#success").hasClass("on")) {
            $("#success").removeClass("on")
        }

        if ($("#thanks").hasClass("on")) {
            $("#thanks").removeClass("on")
        }
    }),

    $("#success").on("click", () => {
        if ($("#success").hasClass("on")) {
            $("#success").removeClass("on")
        }

        if ($("#thanks").hasClass("on")) {
            $("#thanks").removeClass("on")
        }
    })
)    