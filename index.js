import data from "./projectsData.js"

const get = element => document.querySelector(element)
get(".projects").innerHTML = getProjectsHtml()

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

    return projectsPlaceholder
}

get("#mode-checkbox").addEventListener("change",() => {
    get(".intro-section").classList.toggle("section-dark-mode")
    get("body").classList.toggle("body-dark-mode")
    get(".contact-section").classList.toggle("section-dark-mode")
  
})


window.onscroll = function(e) {
    let heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight
    get(".progress-bar").style.width =  `${(window.scrollY * 100) / heigth }%`
}

get("#menu-checkbox").addEventListener("change",() => {
   get("nav").classList.toggle("show")
 
})
