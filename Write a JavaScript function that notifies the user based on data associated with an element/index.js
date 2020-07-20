window.onload = init

function getElements(className) {
    return document.getElementsByClassName(className)
}

function addListeners(elements) {
    for (const element of elements) {
        element.addEventListener('click', (element) => {
            alert(element.srcElement.innerText)
        })
    }
}

function init() {
    console.log('initializing')

    const elements = getElements('element')
    addListeners(elements)

    console.log('done')
}