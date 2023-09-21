const { calculateSquare, calculateRectangle } = require('./shapes')

// persegi
const squareSide = 7
const squareResults = calculateSquare(squareSide)

console.log(`Luas persegi: ${squareResults.area}`)
console.log(`Keliling persegi: ${squareResults.perimeter}`)

// persegi panjang
const rectangleLength = 12
const rectangleWidth = 5
const rectangleResults = calculateRectangle(rectangleLength, rectangleWidth)

console.log(`Luas persegi panjang: ${rectangleResults.area}`)
console.log(`Keliling persegi panjang: ${rectangleResults.perimeter}`)
