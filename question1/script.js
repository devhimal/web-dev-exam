addEventListener("DOMContentLoaded", () => {

  const list = document.getElementById('list')
  const loading = document.getElementById("loading")
  const ul = document.createElement('ul')


  const data = fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
      data.forEach((eachData) => {
        loading.innerHTML = ""
        const li = document.createElement('li')
        const name = document.createElement('p')
        const body = document.createElement('p')
        const email = document.createElement('p')
        name.textContent = `Name: ${eachData.name}`
        body.textContent = `Body: ${eachData.body}`
        email.textContent = `Email: ${eachData.email}`
        li.appendChild(name)
        li.appendChild(body)
        li.appendChild(email)
        ul.appendChild(li)
        list.appendChild(ul)
      })

    })



})
