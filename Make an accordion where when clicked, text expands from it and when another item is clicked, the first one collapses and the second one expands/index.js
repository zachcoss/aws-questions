window.onload = init

function getAccordians() {
    return document.getElementsByClassName('accordian')
}

function addEventListeners(accordians) {
    for (const accordian of accordians) {
        accordian.addEventListener('click', function(){
            // toggle active class
            this.classList.toggle("active")

            // toggle panel display
            const panel = this.nextElementSibling
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = '50px';
            }
        })
    }
}

function init() {
    const accordians = getAccordians()
    addEventListeners(accordians)
}