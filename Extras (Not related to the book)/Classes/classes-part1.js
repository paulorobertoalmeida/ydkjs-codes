// Prototype Method
class Retangulo {
    constructor(altura, largura) {
      this.altura = altura; this.largura = largura;
    }
  //Getter
    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new Retangulo(10, 10);

console.log(quadrado.area);


//Static Method

class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Ponto(5, 5);
const p2 = new Ponto(10, 10);

p1.distancia; //undefined
p2.distancia; //undefined

console.log(Ponto.distancia(p1, p2));
console.log(p1);
console.log(p2);

// Extends subclass

function Animal (nome) {
    this.nome = nome;
  }
  
  Animal.prototype.falar = function() {
     console.log(this.nome + ' faça barulho.');
  }
  
  class Cachorro extends Animal {
    falar() {
      console.log(this.nome + ' lati.');
    }
  }
  
  let cachorro = new Cachorro('Mitzie');
  cachorro.falar();
  
  /*
  new Cachorro (Constructor) -> Cachorro (class) -> Animal (function) -> (nome) parameter
  */

// Extends Subclasses Exemple 2
// Animal variable -> falar() method -> Cachorro class -> nome parameter


let Animal = {
    falar() {
       console.log(this.nome + ' faça barulho.');
    }
 };
 
 class Cachorro {
    constructor(nome) {
       this.nome = nome;
    }
 }
 
 Object.setPrototypeOf(Cachorro.prototype, Animal);
 
 let cachorro = new Cachorro('Mitzie');
 cachorro.falar();