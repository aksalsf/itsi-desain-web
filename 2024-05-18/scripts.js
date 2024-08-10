// algoritma pemrograman
// constanta = variabel yang tidak bisa diubah
// string = teks
// variabel = tempat menyimpan data
// const nama = "Rizky";
// let umur = 20;
// nomor telepon
// const noTelp = "08123456789";
// let alamat = 'Solo';
// angka => number, integer (20, 1234), float (20.5, 3.14)
// umur = 24;
// umur = umur + 5;
// umur = umur - 5;
// umur = umur * 5;
// umur = umur / 5;

// alert(nama);
// alert(noTelp);
// alert(alamat);
// alert(umur);

// percabangan
let nama;
let domisili;
let umur;
let pengalamanKerja;

// boolean = true / false
let lolos = true;

nama = prompt("Masukkan nama anda");
domisili = prompt("Masukkan domisili anda");
umur = prompt("Masukkan umur anda");
pengalamanKerja = prompt("Masukkan pengalaman kerja anda");

alert("Nama: " + nama);
alert("Domisili: " + domisili);
alert("Umur: " + umur);
alert("Pengalaman Kerja: " + pengalamanKerja + " tahun");

// syarat usia: minimal 17 tahun, maksimal 60 tahun
// if (umur < 17) {
//   alert("Maaf, umur Anda belum mencukupi");
//   lolos = false;
// }

// if (umur > 60) {
//   alert("Maaf, Anda seharusnya sudah pensiun");
//   lolos = false;
// }

// && = dan
// || = atau
// == / ===
// "17" == 17; // true
// "17" === 17; // false
if (umur < 17 || umur > 60) {
  alert("Maaf, umur Anda tidak memenuhi syarat");
  lolos = false;
}

// umur <= 25 tahun, tidak perlu pengalaman kerja
// umur > 25 tahun, minimal 1 tahun pengalaman kerja
if (umur > 25 && pengalamanKerja < 1) {
  alert("Maaf, Anda harus memiliki pengalaman kerja minimal 1 tahun");
  lolos = false;
}

// Posisi yang dibuka: Web Developer, Android Developer, iOS Developer
// Web Developer: minimal 1 tahun pengalaman kerja
// Android Developer: minimal 2 tahun pengalaman kerja

if (lolos) {
  alert("Terima kasih sudah mengisi data!");
}
