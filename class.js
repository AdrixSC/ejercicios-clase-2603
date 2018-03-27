class Mamifero {
    constructor(name, age) {
        this.nombre = name;
        this.edad = age;
    };
    edadPerroOHumano() {
        return this.edad / 7
    };
    nombreEnMayusculas() {
        return this.nombre.toUpperCase();
    };
};

class Perro extends Mamifero {
    ladrar() {
        return "wuau wuau"
    };
};

class Humano extends Mamifero {
    dialogar() {
        return "Hola amigos"
    };
};

let mascota = new Mamifero("dasha", 3);
let persona = new Mamifero("adriana", 29);

console.log(mascota.Perro(), mascota.Humano())
console.log(persona.Perro(), persona.Humano())