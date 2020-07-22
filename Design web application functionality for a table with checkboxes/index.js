let data = {
    todo: 'Zach',
    completed: true
}

let obj = {}

function updateHTML() {
    if (document.getElementById('tableRow')) {
        document.getElementById('tableRow').remove()
    }
    // create elements
    let tableRow = document.createElement('tr')
    let tableCheckbox = document.createElement('td')
    let tableCheckboxInput = document.createElement('input')
    let tableTodo = document.createElement('td')
    let tableCompleted = document.createElement('td')

    // set checkbox listener
    tableCheckboxInput.addEventListener('change', function(event) {
        console.log('changing', event)
        obj.completed = event.srcElement.checked
    })

    // set values
    tableRow.setAttribute('id', 'tableRow')
    tableTodo.innerText = obj.todo
    tableCompleted.innerText = (obj.completed) ? 'Yes' : 'No'
    tableCheckboxInput.setAttribute('type', 'checkbox')

    if (obj.completed) {
        tableCheckboxInput.setAttribute('checked', obj.completed)
    }

    // form elements
    tableCheckbox.appendChild(tableCheckboxInput)
    tableRow.appendChild(tableCheckbox)
    tableRow.appendChild(tableTodo)
    tableRow.appendChild(tableCompleted)

    // insert data
    document.getElementById('todo').appendChild(tableRow)
}

function listenToChanges() {
    for (const key of Object.keys(data)) {
        Object.defineProperty(obj, key, {
            get: function() {
                return data[key]
            },
            set: function(newValue) {
                data[key] = newValue
                updateHTML()
            }
        })
    }
}

function getNewData() {
    return {
        todo: 'Coss',
        completed: false
    }
}

window.onload = init

function init() {
    // listen to changes
    listenToChanges()
    // pull data
    const newData = getNewData()
    console.log(obj.todo)
    console.log(obj.completed)

    // update data
    obj.todo = newData.todo
    obj.completed = newData.completed

    console.log(obj.todo)
    console.log(obj.completed)

    setTimeout(function() {
        obj.todo = 'Zach'
        obj.completed = true
    }, 5000)
}