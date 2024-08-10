let keranjang = [];

// ["Apel", "Jeruk", "Mangga", "Duku", "Pisang"]
// [2, 3, 5, 7, 11]

let isLanjutBelanja = true;
let buah;

while (isLanjutBelanja) {
  buah = prompt("Masukkan nama buah yang ingin dibeli: ");
  keranjang.push(buah);

  isLanjutBelanja = confirm("Apakah Anda ingin melanjutkan belanja?");
}

const keranjangEl = document.getElementById("keranjang");

console.time("foreach");
// DOM Manipulation
keranjang.forEach(buah => {
  // bikin element li
  const buahEl = document.createElement("li");

  // isi element li dengan nilai dari variabel buah
  buahEl.textContent = buah;

  // masukkan element li ke dalam element ul
  keranjangEl.appendChild(buahEl);
})
console.timeEnd("foreach");

const keranjangBuahEl = document.getElementById("keranjangBuah");
console.time("for");
for (let indeks = 0; indeks < keranjang.length; indeks++) {
  // bikin element li
  const buahEl = document.createElement("li");

  // isi element li dengan nilai dari keranjang pada index ke-i
  buahEl.textContent = keranjang[indeks];

  // masukkan element li ke dalam element ul
  keranjangBuahEl.appendChild(buahEl);
}
console.timeEnd("for");
