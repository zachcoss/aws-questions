window.onload = init

function getContainer() {
    return document.getElementById('main')
}

function getData() {
    return ['John', 'Jane', 'Joe']
}

function createElements(data) {
    const employeeElements = []
    for (const employee of data) {
        const element = document.createElement('p')
        element.textContent = employee
        employeeElements.push(element)
    }
    return employeeElements
}

function insertElements(container, elements) {
    for (const element of elements) {
        container.appendChild(element)
    }
}

function init() {
    const container = getContainer()
    const data = getData()
    const elements = createElements(data)

    insertElements(container, elements)
}