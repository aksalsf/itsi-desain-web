// Konstanta = variabel yang tidak dapat diubah
const lampuMati = "lampuOff.gif"
const lampuNyala = "lampuOn.gif";
const lampu = document.getElementById("lampu")

// Variabel = variabel yang dapat diubah
let statusLampu = "off";

lampu.src = lampuMati;

function saklar()
{
  if (statusLampu === "off") {
    statusLampu = "on";
    lampu.src = lampuNyala;
  } else {
    statusLampu = "off"
    lampu.src = lampuMati;
  }
}
