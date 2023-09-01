// Membuat array dengan 100 nilai random antara 1 sampai 50
const array100 = [];
for (let i = 0; i < 100; i++) {
  array100.push(Math.floor(Math.random() * 50) + 1);
}
console.log("Array dengan jumlah index 100:", array100);

// Membuat array genap dan ganjil
const arrayGenap = [];
const arrayGanjil = [];
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    arrayGenap.push(array100[i]);
  } else {
    arrayGanjil.push(array100[i]);
  }
}
console.log("Array genap dengan jumlah index 50:", arrayGenap);
console.log("Array ganjil dengan jumlah index 50:", arrayGanjil);

// Menghitung min, max, total, dan rata-rata untuk array genap
let minGenap = arrayGenap[0];
let maxGenap = arrayGenap[0];
let totalGenap = arrayGenap[0];
for (let i = 1; i < arrayGenap.length; i++) {
  if (arrayGenap[i] < minGenap) {
    minGenap = arrayGenap[i];
  }
  if (arrayGenap[i] > maxGenap) {
    maxGenap = arrayGenap[i];
  }
  totalGenap += arrayGenap[i];
}
const rataRataGenap = totalGenap / arrayGenap.length;
console.log("Min pada array genap:", minGenap);
console.log("Max pada array genap:", maxGenap);
console.log("Total pada array genap:", totalGenap);
console.log("Rata-rata pada array genap:", rataRataGenap);

// Menghitung min, max, total, dan rata-rata untuk array ganjil
let minGanjil = arrayGanjil[0];
let maxGanjil = arrayGanjil[0];
let totalGanjil = arrayGanjil[0];
for (let i = 1; i < arrayGanjil.length; i++) {
  if (arrayGanjil[i] < minGanjil) {
    minGanjil = arrayGanjil[i];
  }
  if (arrayGanjil[i] > maxGanjil) {
    maxGanjil = arrayGanjil[i];
  }
  totalGanjil += arrayGanjil[i];
}
const rataRataGanjil = totalGanjil / arrayGanjil.length;
console.log("Min pada array ganjil:", minGanjil);
console.log("Max pada array ganjil:", maxGanjil);
console.log("Total pada array ganjil:", totalGanjil);
console.log("Rata-rata pada array ganjil:", rataRataGanjil);

// Perbandingan nilai min, max, total, dan rata-rata
console.log("Perbandingan nilai:");

let perbandinganMin = "Min lebih besar pada ";
if (minGenap < minGanjil) {
  perbandinganMin += "array ganjil";
} else if (minGenap > minGanjil) {
  perbandinganMin += "array genap";
} else {
  perbandinganMin += "kedua array memiliki nilai yang sama";
}
console.log(perbandinganMin);

let perbandinganMax = "Max lebih besar pada ";
if (maxGenap < maxGanjil) {
  perbandinganMax += "array ganjil";
} else if (maxGenap > maxGanjil) {
  perbandinganMax += "array genap";
} else {
  perbandinganMax += "kedua array memiliki nilai yang sama";
}
console.log(perbandinganMax);

let perbandinganTotal = "Total memiliki nilai ";
if (totalGenap < totalGanjil) {
  perbandinganTotal += "lebih besar pada array ganjil";
} else if (totalGenap > totalGanjil) {
  perbandinganTotal += "lebih besar pada array genap";
} else {
  perbandinganTotal += "sama pada kedua array";
}
console.log(perbandinganTotal);

let perbandinganRataRata = "Rata-rata lebih besar pada ";
if (rataRataGenap < rataRataGanjil) {
  perbandinganRataRata += "array ganjil";
} else if (rataRataGenap > rataRataGanjil) {
  perbandinganRataRata += "array genap";
} else {
  perbandinganRataRata += "kedua array memiliki rata-rata yang sama";
}
console.log(perbandinganRataRata);


