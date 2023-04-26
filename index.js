import data from "./projectsData.js"

console.log(data)
const get = element => document.querySelector(element)
get(".projects").innerHTML = getProjectsHtml()
console.log(get(".projects"))
function getProjectsHtml() {
    let projectsPlaceholder = ""
    data.map(project => {
        const {name,link,image} = project
       projectsPlaceholder +=
        `<div class="project flex container" ">
            <a href="${link}" target="_blank" style=background-image:url(${image})></a>
            <h3>${name}</h3>
            
        </div>
        `
    })
    console.log(projectsPlaceholder)
    return projectsPlaceholder
}


