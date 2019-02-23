var pikachu = {
  nombre: "Pikachu",
  vida: 100,
  ataque: 20,
  atacar: function (atacado) {
      atacado.vida = atacado.vida - this.ataque 
  }
}

var charmander =  {
  nombre: "Charmander",
  vida: 100,
  ataque: 5,
  atacar: function (atacado) {
    atacado.vida = atacado.vida - this.ataque 
}
}


while (pikachu.vida>0 && charmander.vida>0){
  var victimario = prompt('Ataca:', '');
  var victima = prompt('Atacado', '');

  victimario = victimario.toLowerCase();
  victima = victima.toLowerCase();

  if(victimario == 'pikachu' && victima == 'charmander'){

    pikachu.atacar(charmander);
    console.log('La vida de ' + charmander.nombre + ' es: ' + charmander.vida);

  }else if(victimario == 'charmander' && victima == 'pikachu'){

    
    charmander.atacar(pikachu);
    console.log('La vida de ' + pikachu.nombre + ' es: ' + pikachu.vida);

  } else {
    console.log('Entra un nombre de pokemon');

    pikachu.vida = 0;
  }

} if(pikachu.vida <= 0){

  console.log('Mataste a Pikachu!')

 }else if(pikachu.vida = 0){

  console.log('Mataste a Pikachu!')

}
