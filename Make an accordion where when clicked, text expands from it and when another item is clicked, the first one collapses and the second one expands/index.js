window.onload = init

function getAccordians() {
    return document.getElementsByClassName('accordian')
}

function togglePanels() {
    for (accordian of getAccordians()) {
        if (this === accordian) {
            const panel = this.nextElementSibling
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.toggle("active", false)
            } else {
                panel.style.maxHeight = '50px';
                this.classList.toggle("active", true)
            }
        } else {
            console.log('not match')
            const panel = accordian.nextElementSibling
            panel.style.maxHeight = null;
            accordian.classList.toggle("active", false)
        }
    }
}

function addEventListeners(accordians) {
    for (const accordian of accordians) {
        accordian.addEventListener('click', togglePanels)
    }
}

function init() {
    const accordians = getAccordians()
    addEventListeners(accordians)
}