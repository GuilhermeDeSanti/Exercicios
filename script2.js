var nivel;
var exp = false;

function saldoVitorias(vit, der) {
  return vit - der;
}

let vitorias = saldoVitorias(18, 5);

while(vitorias < 10) {
  exp = true;
  var nivel = "Ferro";
  break;
}
while(vitorias >= 11 && vitorias <= 20) {
  exp = true;
  var nivel = "Bronze";
  break;
}
while(vitorias >= 21 && vitorias <= 50) {
  exp = true;
  var nivel = "Prata";
  break;
}
while(vitorias >= 51 && vitorias <= 80) {
  exp = true;
  var nivel = "Ouro";
  break;
}
while(vitorias >= 81 && vitorias <= 90) {
  exp = true;
  var nivel = "Diamante";
  break;
}
while(vitorias >= 91 && vitorias <= 100) {
  exp = true;
  var nivel = "Lendario";
  break;
}
while(vitorias >= 101) {
  exp = true;
  var nivel = "Imortal";
  break;
}

console.log("O herói tem saldo de " + vitorias + " Está no nível " + nivel)
if(!exp) {
  console.log("Ocorreu um erro!");
}