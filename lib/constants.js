const questions = [
    {
        type: "input",
        name: "initials",
        message: "Enter up to 3 initials for your logo:",
        validate: (input) => {
            if (input.length < 4) {
                return true
            } else {return "Please choose 3 or fewer characters"}
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color or # followed by a hexadecial code for your text color:"
    },
    {
        type: "list",
        name: "shape",
        message: "Select the shape would you like for your logo:",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color or # followed by a hexadecial code for your shape color:"
    },
]

module.exports = questions