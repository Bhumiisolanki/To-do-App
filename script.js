const input = document.querySelector('#taskInput')
const addBtn = document.querySelector("#addBtn")
const taskList = document.querySelector("#taskList")

addBtn.addEventListener('click', function () {
    const taskText = input.value

    if (taskText === '') {
        alert('Please enter a task!')
        return
    }

    const li = document.createElement('li')

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'X'
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click', function () {
        li.remove()

    })

    li.addEventListener('click', function () {
        li.classList.toggle('done')

    })

    li.innerHTML = taskText
    li.appendChild(deleteBtn)

    taskList.appendChild(li)

    input.value = ''

    
})


    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addBtn.click()
        }
    })
