const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./constants')
const {Circle, Square, Triangle} = require("./shapes")

function writeToFile(content) {
    let id = Math.floor(Math.random()*100)
    fs.writeFile(`logo_${id}.svg`, content, (err) => {
        if(err){
            console.error(err.message)
        }
    })
    console.log("Generated logo.svg")
}

async function cli() {
    const response = await inquirer.prompt(questions)
    const {initials, textColor, shapeColor} = response
    if(response.shape === "circle") {
        const shape = new Circle(initials, textColor, shapeColor).render()
        return shape
    }
    if(response.shape === "triangle") {
        const shape = new Triangle(initials, textColor, shapeColor).fullRender()
        return shape
    }
    if(response.shape === "square") {
        const shape = new Square(initials, textColor, shapeColor).render()
        return shape
    }
}

module.exports = {writeToFile, cli}