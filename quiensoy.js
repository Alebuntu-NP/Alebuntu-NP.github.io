function quiensoy(evento) {
    var resultado = 0;



    console.log(document.querySelectorAll('input')[0].checked);
    var elementos = document.querySelectorAll('input');
    elementos.forEach(elemento => {

        if (elemento.checked) {
            resultado += parseFloat(elemento.getAttribute("value")) * 20;
            console.log(elemento.getAttribute("value"));

        }


    });
    console.log(resultado);
    evento2 = document.querySelectorAll('#soy')[0];
    console.log(resultado);

    if (resultado >= 80) {
        console.log("Luffy");
        evento2.setAttribute("src", "imagenes/quieneres/luffy.jpg")
            ;

    } else if (resultado >= 70) {
        console.log("Zoro");
        evento2.setAttribute("src", "imagenes/quieneres/zoro.jpg")

    } else if (resultado >= 60) {
        console.log("Sanji");
        evento2.setAttribute("src", "imagenes/quieneres/sanji.jpg")

    }
    else if (resultado >= 50) {
        console.log("Chopper");
        evento2.setAttribute("src", "imagenes/quieneres/chopper.jpg")


    }
    else if (resultado >= 40) {
        console.log("Brook");
        evento2.setAttribute("src", "imagenes/quieneres/brook.jpg")

    }
    else if (resultado >= 30) {
        console.log("Nami");
        evento2.setAttribute("src", "imagenes/quieneres/nami.jpg")

    }

}








