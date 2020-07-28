window.onload = init

function determineIfElementIsCompletelyVisible(element) {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const bounds = element.getBoundingClientRect()
    
    // elements left/top edges are outside the viewport
    if (bounds.x < 0 || bounds.y < 0) {
        console.log("non-viewable")
        return;
    }

    // element is too wide
    if (bounds.right > viewportWidth) {
        console.log("non-viewable")
        return;
    }

    // element is too tall
    if (bounds.bottom > viewportHeight) {
        console.log("non-viewable")
        return;
    }

    console.log('viewable')
}

function init() {
    const main = document.getElementById('myimage')

    setInterval(function() {
        determineIfElementIsCompletelyVisible(main)
    }, 2000)
}