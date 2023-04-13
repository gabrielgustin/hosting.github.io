var imagenes = [
              "../images/ModuloUno.png",
              "../images/ModuloDos.png",
              "../images/ModuloTres.png",
             ];
document.Imagen.src = imagenes[0]

var SliderDerecha = document.querySelector(".slider-derecho");
var SliderIzquierda = document.querySelector(".slider-izquierdo");
var Contador = 0 
var NavigateModule = document.querySelector(".slider-screen")

function MoverDerecha(){
        Contador++;
        if (Contador > imagenes.length - 1){
            Contador = 0 
        }
        document.Imagen.src = imagenes[Contador]
    }

SliderDerecha.addEventListener("click", MoverDerecha)

function MoverIzquierda(){
    Contador--;
    if (Contador < 0){
        Contador = imagenes.length -1
    }
    document.Imagen.src = imagenes[Contador]
}

SliderIzquierda.addEventListener("click", MoverIzquierda)


