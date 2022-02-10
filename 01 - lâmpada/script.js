let turnON = document.getElementById("btnLigar");
let turnOff = document.getElementById("btnDesligar");
let lamp = document.getElementById("lampada");

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function lampBroken() {
  lamp.src = "./img/quebrada.jpg";
}
//verifica se no source há a palavra 'quebrada'.
function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

// ao clique, a função abaixo responsável por ligar a lâmpada será executada.
turnON.addEventListener("click", lampOn);
// ao clique, a função a seguir, responsável por desligar a lâmpada será executada.
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
