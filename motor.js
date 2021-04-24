var texto = document.getElementById("ingreso_edad");
var bot1 = document.getElementById("boton1");
var bot2 = document.getElementById("boton2");

bot1.addEventListener("click", dibujoPorClick );

function dibujoPorClick(){

    var x = parseInt(texto.value);

    alert("no me toques!!!" + x);
}   