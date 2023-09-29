

$( document ).ready(
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
    })
    // ,

    // $("#contact-form").on("submit", event => {
    //     event.preventDefault()

    //     const contactData = $("#contact-form").serializeArray()

    //     console.log('contactData', contactData)
    //     const contactObject = {}

    //     for (let i=0; i < contactData.length; i++) {
    //         contactObject[contactData[i].name] = contactData[i].value
    //     }
    // })
)