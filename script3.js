class Monstro {
  constructor(name, hp, typeM) {
    this.name = name;
    this.hp = hp;
    this.typeM = typeM;
  }

  verificarHp() {
    if (this.hp > 250000) {
      console.log("O monstro está full HP");
    } else if (this.hp === 0) {
      console.log("O monstro está morto!");
    }
  }

  atacado() {
    console.log(dano(`Um monstro com ${this.hp} de hp chamado ${this.name} foi atacado!\n
    Durante o ataque você descobre que ele pertence à classificação ${this.typeM} e recebeu um dano de`));
  }
}

function dano(damage) {
  //let vida = 1000;
  let danoBase = 60;
  //let danoR = (vida - danoBase);
  return [damage, danoBase].join(' ').concat("!");
}

let calcHp = new Monstro(250000);
let newMonstro = new Monstro('Yog-Sothoth', 25000, 'Caster');
  


function ataque(tipo) {
  let magia = "magia";
  return [tipo, magia].join(' ').concat("!");
}

class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atacar() {
    console.log(ataque(`O ${this.type} atacou usando`));
  }
}

let myHero = new Hero('Gui', 21, 'Mago');
myHero.atacar();

for (let i = 1; i < 6; i++) {
  console.log("A magia causou", i, "de dano");
}

newMonstro.atacado();
calcHp.verificarHp();