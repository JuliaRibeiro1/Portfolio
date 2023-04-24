import data from "./projectsData.js"

console.log(data)
const get = element => document.querySelector(element)

get(".projects").innerHtml = getProjects()

function getProjects() {
    let projectsPlaceholder = ""
    data.map(project => {
       projectsPlaceholder +=
        `<div>
            <h3>${project.name}</h3>
            <a href="${project.link}"></a>
        </div>`
    })
    return projectsPlaceholder
}
