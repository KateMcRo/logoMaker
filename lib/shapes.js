class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor ?? ""
    }
    setColor(colorString) {
        this.shapeColor = colorString
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80"  fill="${this.shapeColor}" stroke-width="5"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

class Square extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" stroke-width="5"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
    fullRender() {
        return `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = {Circle, Square, Triangle}
