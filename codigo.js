// JavaScript source code

//array con profesores y telefonos
var profesores = {
    "Fernando Jimenez": 913110077,
    "Alberto Jimenez": 914638017,
    "Teresa Herranz":917183031
};

//Rellenar la lista de profesores con sus telefonos
var seleccion = document.getElementById("profesores");
for (var clave in profesores) {
    var opcion = document.createElement("option");
    opcion.value = profesores[clave];
    opcion.text = clave;
    seleccion.appendChild(opcion);
}

function devolverTelefono(e) {
    visor.innerHTML=e.value;
}

document.getElementById("buscar").addEventListener("click", cambiarContenido);
function cambiarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && status == 200) {
            document.getElementById("visor").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "holamundo.txt", true);
    xhr.send();
}