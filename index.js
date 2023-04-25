import data from "./projectsData.js"

console.log(data)
const get = element => document.querySelector(element)
get(".projects").innerHTML = getProjects()
console.log(get(".projects"))
function getProjects() {
    let projectsPlaceholder = ""
    data.map(project => {
        const {name,link,id} = project
       projectsPlaceholder +=
        `<div class="project flex container" id="project${id}">
            <a href="${link}" target="_blank"></a>
            <h3>${name}</h3>
            
        </div>
        `
    })
    console.log(projectsPlaceholder)
    return projectsPlaceholder
}


