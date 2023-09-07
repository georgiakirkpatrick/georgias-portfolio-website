function listenForChivoloClick() {
    $('#chivolo-section').on('click', '#chivolo-button', function() {
        let chivoloOverlay = document.getElementById("chivolo-overlay")

        $(chivoloOverlay).addClass('overlay-on')

        $('#close-chivolo').on('click', function() {
    
            $(chivoloOverlay).removeClass('overlay-on')
        })
    })
}

function listenForWearingClick() {
    $('#wearing-section').on('click', '#wearing-button', function() {
        let wearingOverlay = document.getElementById("wearing-overlay")

        $(wearingOverlay).addClass('overlay-on')

        $('#close-wearing').on('click', function() {
    
            $(wearingOverlay).removeClass('overlay-on')
        })
    })
}

function listenMenuItem() {
    let menuItems = document.getElementById("menu-items")
    let menuOverlay = document.getElementById("menu-overlay")

    menuItems.addEventListener('click', function() {
        $('#menu-icon').toggleClass('cross')
        $(menuOverlay).toggleClass('overlay-on')
    })
}

function listenForMenuClick() {
    $('nav').on('click', '#menu-icon', function() {
        $('#menu-icon').toggleClass('cross')

        let menuOverlay = document.getElementById("menu-overlay")
        $(menuOverlay).toggleClass('overlay-on')
    })
}

function handlePortfolio() {
    listenForMenuClick()
    listenMenuItem()
    listenForWearingClick()
    listenForChivoloClick()
}

$(handlePortfolio)

i=0