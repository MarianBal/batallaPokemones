var pokemones = [
  {nombre:"pikachu",
  vida: 100,
  ataque: 20,
  atacar: function (atacado) {
      atacado.vida = atacado.vida - this.ataque }
  },

  {nombre: "charmander",
  vida: 100,
  ataque: 5,
  atacar: function (atacado) {
  atacado.vida = atacado.vida - this.ataque }
  }
]



  var atacante = prompt('Ataca:', '');
  var atacado = prompt('Atacado', '');

  atacante = atacante.toLowerCase();
  atacado = atacado.toLowerCase();


for(var i=0; i<pokemones.length; i++){
  
  if(atacante === pokemones[i].nombre){

    console.log(atacante)

    for(var j =0; j<pokemones.length; j++){

      if(atacado === pokemones[j].nombre){
        console.log(atacado)
        pokemones[i].atacar(pokemones[j])

        console.log(pokemones[i].nombre + ' atacó a ' + pokemones[j].nombre + ' que ahora tiene ' + pokemones[j].vida + ' puntos de vida')
      }
    }
  }
}


