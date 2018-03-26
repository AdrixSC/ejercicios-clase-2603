class Adriana { //molde
      constructor (name, age) { //constructor
        //this.nombre = "Adriana"; //sin variables no se usan parametros

        //this.edad = 29; 
        this.nombre = name; //con variables, usamos parametros,
        this.edad = age;
    };

    edadEnAñosPerros () { //metodo
        //return this.miNombreEnMayusuculas() + "tiene" + this.edad / 7 //podemos usar los metodos en cualquier lugar dentro de nuestro molde o clase, haciendo referencia con el this
        return this.edad / 7
    };

    miNombreEnMayusuculas () { //metodo
        return this.nombre.toUpperCase()
    }
}

// let yo = new Adriana //instanciar sin parametros cuando no hay variables
let yo = new Adriana ("adriana", 29) //instanciar con parametros
let persona1 = new Adriana("angel", 35) //instanciar con parametros
console.log(yo.miNombreEnMayusuculas()) 
console.log(yo.edadEnAñosPerros())
console.log(persona1.miNombreEnMayusuculas()) 
console.log(persona1.edadEnAñosPerros())

