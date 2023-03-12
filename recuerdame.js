var evento_1 = null;
var evento_2 = null;
var valor_1 = null;
var valor_2 = null;
var aciertos = 0;
var fallos = 0;
function pareja(evento) {
    if (!evento.classList.contains('visto') && !evento.classList.contains('solucionado')) {
        console.log(evento);
        if (evento_1 == null && evento.classList.contains('oculto')) {

            evento_1 = evento;
            valor_1 = parseInt(evento_1.getAttribute("valor"));
            console.log(valor_1);
            addImgClas(valor_1, evento_1);
            console.log(evento_1.classList.add('visto'));
            console.log(evento_1.classList.toggle('oculto'));

        }
        else if (evento_2 == null && evento.classList.contains('oculto')) {
            evento_2 = evento;
            valor_2 = parseInt(evento_2.getAttribute("valor"));
            addImgClas(valor_2, evento_2);
            console.log(evento_2.classList.add('visto'));
            console.log(evento_2.classList.remove('oculto'));
        }
        if (evento_1 != null && evento_2 != null) {



            if (valor_1 == valor_2) {
                console.log(evento_1.classList.add('solucionado'));
                console.log(evento_2.classList.add('solucionado'));
                console.log(evento_1.classList.remove('visto'));
                console.log(evento_2.classList.remove('visto'));
                aciertos = aciertos + 1;
            }
            else {
                console.log(evento_1.classList.add('oculto'));
                console.log(evento_2.classList.add('oculto'));
                console.log(evento_1.classList.remove('visto'));
                console.log(evento_2.classList.remove('visto'));
                fallos = fallos + 1;
                removeImgClas(valor_1, evento_1);
                removeImgClas(valor_2, evento_2);

            }
            valor_1 = null;
            valor_2 = null;
            evento_1 = null;
            evento_2 = null;
            if (aciertos == 6) {
                if (fallos == 0) {
                    alert("ERES UN DIOS => " + fallos + " fallos");

                } else if (fallos > 0 && fallos < 5) {
                    alert("TE FALTA POCO PARA SER EL REY DE LOS PIRATAS => " + fallos + " fallos");
                }
                else if (fallos > 4 && fallos < 10) {
                    alert("TODAVIA TE FALTA CAMINO PARA RECORRER => " + fallos + " fallos");

                }
                else if (fallos > 9 && fallos < 14) {
                    alert("ESTAS MUY VERDE CON TU MEMORIA => " + fallos + " fallos");


                } else {
                    alert("ME PREOCUPAS, MIRATE LA CABEZA QUE PUEDE QUE TENGAS UN PROBLEMA GRAVE => " + fallos + " fallos");

                }


            }
        }
    }
}
function addImgClas(numero, evento) {

    var clase = 'pareja' + numero;
    console.log(clase);
    evento.classList.add(clase);

}


function removeImgClas(numero, evento) {
    var clase = 'pareja' + numero;
    console.log(clase);
    evento.classList.remove(clase);
}










