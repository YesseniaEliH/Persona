function obtenerDatos(){
  var nombre = prompt("Ingresa tu nombre");
  var apellido = prompt("Ingresa tus apellidos");
  var dni = prompt("Ingresa tu DNI");
  var direccion = prompt("Ingresa tu direccion");

   document.getElementById("nom").innerHTML = "Nombre: " + nombre;
   document.getElementById("ape").innerHTML = "Apellido: " + apellido;
   document.getElementById("dni").innerHTML = "DNI: " + dni;
   document.getElementById("dir").innerHTML = "Dirección: " + direccion;
}
