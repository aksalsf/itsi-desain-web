let nama = prompt("Masukkan nama Anda:");
let mtk = prompt("Masukkan nilai Matematika:");
let bIndo = prompt("Masukkan nilai Bahasa Indonesia:");
let bInggris = prompt("Masukkan nilai Bahasa Inggris:");

const rata2 = (parseInt(mtk) + parseInt(bIndo) + parseInt(bInggris)) / 3;
alert(`Halo, ${nama}! Rata-rata nilai kamu adalah ${rata2}`);

// < 50 = E
// 51 - 60 = D
// 61 - 70 = C
// 71 - 80 = B
// 81 - 100 = A

// if (rata2 < 50) {
//   alert("Predikat Anda E");
// }

// if (rata2 >= 51 & rata2 < 61) {
//   alert("Predikat Anda D");
// }

// if (rata2 >= 61 && rata2 < 71) {
//   alert("Predikat Anda C");
// }

// if (rata2 >= 71 && rata2 < 81) {
//   alert("Predikat Anda B");
// }

// if (rata2 >= 81) {
//   alert("Predikat Anda A");
// }

let predikat = "";
if (rata2 < 50) {
  predikat = "E";
} else if (rata2 < 61) {
  predikat = "D";
} else if (rata2 < 71) {
  predikat = "C";
} else if (rata2 < 81) {
  predikat = "B";
} else {
  predikat = "A";
}
alert(`Predikat Anda adalah ${predikat}`);

switch (predikat) {
  case "E":
    alert("Anda tidak lulus dan wajib mengulang");
    break;
  case "D":
    alert("Anda tidak lulus dan harus ikut remidi");
    break;
  case "C":
    alert("Anda lulus, tapi mohon ikut remidi");
    break;
  case "B":
    alert("Anda lulus, harap tingkatkan lagi");
    break;
  case "A":
    alert("Selamat Anda lulusan terbaik!");
    break;
  default:
    break;
}
