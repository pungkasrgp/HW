// Menghitung luas dan keliling persegi
const calculateSquare = (side) => {
    const area = side * side
    const perimeter = 4 * side
    return { area, perimeter }
  }
  
  // Menghitung luas dan keliling persegi panjang
  const calculateRectangle = (length, width) => {
    const area = length * width
    const perimeter = 2 * (length + width)
    return { area, perimeter }
  }
  
  module.exports = { calculateSquare, calculateRectangle }
  