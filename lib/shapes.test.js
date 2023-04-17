const {Circle, Square, Triangle} = require("./shapes")

describe("circle test", () => {
    test("this should render an svg for a red circle element with white text that reads abc", () => {
        const myCircle = new Circle("abc", "white", "red").render()
        const expected = `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80"  fill="red" stroke-width="5"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">abc</text>
        </svg>
        `
        expect(myCircle).toEqual(expected)
    })
})

describe("square test", () => {
    test("this should render an svg for a red square element with white text that reads abc", () => {
        const mySquare = new Square("abc", "white", "red").render()
        const expected = `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <rect x="90" y="40" width="120" height="120" fill="red" stroke-width="5"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">abc</text>
        </svg>
        `
        expect(mySquare).toEqual(expected)
    })
})

describe("triangle test", () => {
    test("this should render an svg for a red triangle element with white text that reads abc", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
    test("this should render a full svg instead of just a polygon", () => {
        const myTriangle = new Triangle("abc", "white", "red").fullRender()
        const expected = `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="red" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">abc</text>
        </svg>
        `
        expect(myTriangle).toEqual(expected)
    })
})
