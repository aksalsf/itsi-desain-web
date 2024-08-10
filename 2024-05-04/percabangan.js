const nama = prompt("Masukkan nama: ");

const nilaiMTK = prompt("Masukkan nilai MTK: ");
const nilaiIPA = prompt("Masukkan nilai IPA: ");
const nilaiBahasa = prompt("Masukkan nilai Bahasa: ");
const nilaiInggris = prompt("Masukkan nilai Inggris: ");
const nilaiTKJ = prompt("Masukkan nilai TKJ: ");

const rataRata = (parseInt(nilaiMTK) + parseInt(nilaiIPA) + parseInt(nilaiBahasa) + parseInt(nilaiInggris) + parseInt(nilaiTKJ)) / 5;

// alert("Halo, " + nama + "!. Rata-rata nilai kamu adalah " + rataRata);
alert(`Halo, ${nama}!. Rata-rata nilai kamu adalah ${rataRata}`);

const nilaiKKM = 75;

// rataRata > nilaiKKM
if (rataRata >= nilaiKKM) {
  alert("Selamat, kamu lulus!");
} else {
  alert("Maaf, kamu remidi!");
}

// if (rataRata < nilaiKKM) {
//   alert("Maaf, kamu remidi!");
// }
