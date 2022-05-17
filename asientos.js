function asientosDisponibles (asiento, ocupar){
  if ( asiento.indexOf(ocupar) >= 0){
return "Felicitaciones, el asiento número" + " " + ocupar + " " + "está disponible"
} else {
return "Lo sentimos, el asiento número" + " " + ocupar + " " + "está ocupado, pero aún quedan" + " " + asiento.length + " " + "asientos disponibles"
}
}
console.log(asientosDisponibles([25,30,5,2,4],100));