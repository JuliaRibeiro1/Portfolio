import data from "./projectsData.js"

console.log(data)
const get = element => document.querySelector(element)
get(".projects").innerHTML = getProjects()
console.log(get(".projects"))
function getProjects() {
    let projectsPlaceholder = ""
    data.map(project => {
       projectsPlaceholder +=
        `<div class="project flex container">
            <a href="${project.link}" target="_blank"></a>
            <h3>${project.name}</h3>
            
        </div>
        `
    })
    console.log(projectsPlaceholder)
    return projectsPlaceholder
}


